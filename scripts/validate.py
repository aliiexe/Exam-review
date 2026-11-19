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
    integrity_files = json.loads((ROOT / "ORIGINAL_MODULE_FILES.json").read_text())
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
        assert len(questions) == module["questions"]
        assert len(data["cards"]) == module["cards"]
        assert set(questions) == set(module["questionIds"])
        assert set(module["cardIds"]) == {c["id"] for c in data["cards"]}
        assert data["exams"] == module["exams"]
        used = []
        for exam in data["exams"]:
            assert len(exam["questions"]) == 40
            assert all(q in questions for q in exam["questions"])
            used.extend(exam["questions"])
        assert len(used) == len(set(used)) == len(questions), f"Repeated questions between exams: {slug}"
        for question in questions.values():
            assert 0 <= question["answer"] < len(question["options"])
        assert len(questions) == len({q["stem"] for q in questions.values()}), f"Duplicate question: {slug}"
        for qid, question in questions.items():
            assert module["questionAnswers"][qid] == question["answer"]
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
        print(f"OK {slug}: {len(data['cards'])} cards, {len(questions)} questions, {len(data['exams'])} exams, all sources present")
    assert (total_cards, total_questions, total_exams, total_pdf) == (417, 1280, 32, 19)
    for required in ["index.html", "assets/campus.js", "assets/campus.css", "assets/module-bridge.js"]:
        assert (PUBLIC / required).is_file(), required
    config = json.loads((ROOT / "vercel.json").read_text())
    assert config["outputDirectory"] == "public" and config["framework"] is None
    assert config["buildCommand"] == "" and config["installCommand"] == ""
    # Preserve every original module file, beyond the learning-collection checks.
    for name, expected in integrity_files.items():
        assert hashlib.sha256((ROOT / name).read_bytes()).hexdigest() == expected, f"Original module file changed: {name}"
    search = json.loads((PUBLIC / "assets/search-index.json").read_text())
    assert sum(row["module"] == "risques" for row in search) == 90
    risk = modules["risques"]
    assert sum(c["cards"] for c in risk["chapters"]) == len(risk["cards"])
    assert len(risk["sources"][0]["pages"]) == 188
    for collection in [risk["cards"], risk["questions"], risk["artifacts"], risk["td"]]:
        for item in collection:
            assert all(source_id == 1 and 1 <= page <= 188 for source_id, page in item["refs"])
    print("OK: original modules unchanged; risk module integrated; Vercel static configuration present.")


if __name__ == "__main__":
    main()
