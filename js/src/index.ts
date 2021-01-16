import dingbats from "./dingbats";

export interface UnicodeScalarValue {
    codePoint: number;
    string: string;
}

const dingbatsByCodePoint: {[key: string]: UnicodeScalarValue} = {};

const fromCodePoint = String.fromCodePoint ? String.fromCodePoint : fromCodePointPolyfill;

for (const dingbat of dingbats) {
    const codePoint = parseInt(dingbat["Unicode dec"], 10);
    const scalarValue = {
        codePoint: codePoint,
        string: fromCodePoint(codePoint),
    };

    dingbatsByCodePoint[dingbat["Typeface name"].toUpperCase() + "_" + dingbat["Dingbat dec"]] = scalarValue;
}

export function codePoint(typeface: string, codePoint: number): UnicodeScalarValue | undefined {
    return dingbatsByCodePoint[typeface.toUpperCase() + "_" + codePoint];
}

export function dec(typeface: string, dec: string): UnicodeScalarValue | undefined {
    return codePoint(typeface, parseInt(dec, 10));
}

export function hex(typeface: string, hex: string): UnicodeScalarValue | undefined {
    return codePoint(typeface, parseInt(hex, 16));
}

function fromCodePointPolyfill(codePoint: number) {
    if (codePoint <= 0xFFFF) {
        // BMP
        return String.fromCharCode(codePoint);
    } else {
        // Astral
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        const highSurrogate = Math.floor((codePoint - 0x10000) / 0x400) + 0xD800;
        const lowSurrogate = (codePoint - 0x10000) % 0x400 + 0xDC00;
        return String.fromCharCode(highSurrogate, lowSurrogate);
    }
};
