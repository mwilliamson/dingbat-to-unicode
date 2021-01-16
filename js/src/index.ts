import dingbats from "./dingbats";

interface UnicodeScalarValue {
    codePoint: number;
}

const dingbatsByHex: {[key: string]: UnicodeScalarValue} = {};

for (const dingbat of dingbats) {
    dingbatsByHex[dingbat["Typeface name"] + "_" + dingbat["Dingbat hex"]] = {
        codePoint: parseInt(dingbat["Unicode dec"], 10),
    };
}

interface Input {
    typeface: string;
    hex: string;
}

export default function dingbatToUnicode(input: Input) {
    return dingbatsByHex[input.typeface + "_" + input.hex.toUpperCase()];
}
