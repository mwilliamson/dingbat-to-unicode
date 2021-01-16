import csv
import json
import os


_root = os.path.dirname(__file__)


def _main():
    with open(os.path.join(_root, "dingbats.csv")) as dingbats_file:
        dingbat_reader = csv.DictReader(dingbats_file)

        with open(os.path.join(_root, "js/src/dingbats.ts"), "wt", encoding="utf-8") as typescript_file:
            typescript_file.write("const dingbats = [\n")

            for dingbat in dingbat_reader:
                typescript_file.write("    ")
                json.dump(dingbat, typescript_file)
                typescript_file.write(",\n")

            typescript_file.write("];\n")
            typescript_file.write("export default dingbats;");


if __name__ == "__main__":
    _main()
