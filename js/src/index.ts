import dingbats from "./dingbats";

interface UnicodeScalarValue {
    codePoint: number;
}

const dingbatsByDec: {[key: string]: UnicodeScalarValue} = {};
const dingbatsByHex: {[key: string]: UnicodeScalarValue} = {};

for (const dingbat of dingbats) {
    const scalarValue = {
        codePoint: parseInt(dingbat["Unicode dec"], 10),
    };

    dingbatsByDec[dingbat["Typeface name"] + "_" + dingbat["Dingbat dec"]] = scalarValue;
    dingbatsByHex[dingbat["Typeface name"] + "_" + dingbat["Dingbat hex"]] = scalarValue;
}

export function codePoint(typeface: string, codePoint: number): UnicodeScalarValue | undefined {
    return dingbatsByDec[typeface + "_" + codePoint];
}

export function dec(typeface: string, dec: string): UnicodeScalarValue | undefined {
    return dingbatsByDec[typeface + "_" + dec];
}

export function hex(typeface: string, hex: string): UnicodeScalarValue | undefined {
    return dingbatsByHex[typeface + "_" + hex.toUpperCase()];
}
