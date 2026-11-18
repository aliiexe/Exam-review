#!/usr/bin/env python3
"""Validate the shipped, static TRACE Campus package using the Python standard library."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"


def load_module(slug):
    text = (PUBLIC / "modules" / slug / "data.js").read_text(encoding="utf-8")
    payload = text.split("window.TRACE_DATA = ", 1)[1].strip().removesuffix(";")
    return json.loads(payload)


def main():
    catalog = json.loads((PUBLIC / "assets/catalog.json").read_text())
    integrity = json.loads((ROOT / "CONTENT_INTEGRITY.json").read_text())
    modules = {m["id"]: load_module(m["id"]) for m in catalog}
    for record in integrity:
        collection = modules[record["module"]][record["collection"]]
        digest = hashlib.sha256(json.dumps(collection, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
        assert digest == record["sha256"], f"Collection changed: {record}"
    total_questions = total_cards = total_exams = total_pdf = 0
    for module in catalog:
        slug = module["id"]
        data = modules[slug]
        questions = {q["id"]: q for q in data["questions"]}
        assert len(questions) == 400
        assert len(data["exams"]) == 10
        used = []
        for exam in data["exams"]:
            assert len(exam["questions"]) == 40
            assert all(q in questions for q in exam["questions"])
            used.extend(exam["questions"])
        assert len(set(used)) == 400, f"Repeated questions between exams: {slug}"
        for question in questions.values():
            assert 0 <= question["answer"] < len(question["options"])
        for source in data["sources"]:
            assert (PUBLIC / "modules" / slug / source["path"]).is_file()
            if source.get("original"):
                assert (PUBLIC / "modules" / slug / source["original"]).is_file()
            for image in source.get("images", {}).values():
                assert (PUBLIC / "modules" / slug / image).is_file()
        total_questions += len(questions)
        total_cards += len(data["cards"])
        total_exams += len(data["exams"])
        total_pdf += len(data["sources"])
        print(f"OK {slug}: {len(data['cards'])} cards, 400 questions, 10 exams, all sources present")
    assert (total_cards, total_questions, total_exams, total_pdf) == (337, 1200, 30, 18)
    for required in ["index.html", "assets/campus.js", "assets/campus.css", "assets/module-bridge.js"]:
        assert (PUBLIC / required).is_file(), required
    config = json.loads((ROOT / "vercel.json").read_text())
    assert config["outputDirectory"] == "public" and config["framework"] is None
    assert config["buildCommand"] == "" and config["installCommand"] == ""
    print("OK: learning collections unchanged; Vercel static configuration present.")


if __name__ == "__main__":
    main()
