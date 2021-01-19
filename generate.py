import csv
import json
import os


_root = os.path.dirname(__file__)


def _main():
    dingbats = _read_dingbats()

    _write_javascript_module(dingbats)


def _read_dingbats():
    with open(os.path.join(_root, "dingbats.csv")) as dingbats_file:
        dingbat_reader = csv.DictReader(dingbats_file)

        return list(dingbat_reader)


def _write_javascript_module(dingbats):
    with open(os.path.join(_root, "js/src/dingbats.ts"), "wt", encoding="utf-8") as typescript_file:
        typescript_file.write("const dingbats = [\n")

        for dingbat in dingbats:
            typescript_file.write("    ")
            json.dump(dingbat, typescript_file)
            typescript_file.write(",\n")

        typescript_file.write("];\n")
        typescript_file.write("export default dingbats;\n");


if __name__ == "__main__":
    _main()
