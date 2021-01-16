import assert from "assert";

import * as dingbatToUnicode from "../";

export function canConvertFromDingbatCodePointToUnicode() {
    const result = dingbatToUnicode.codePoint("Wingdings", 41);

    assert.deepStrictEqual(result, {
        codePoint: 0x2706,
    });
}

export function canConvertFromDecimalDingbatToUnicode() {
    const result = dingbatToUnicode.dec("Wingdings", "41");

    assert.deepStrictEqual(result, {
        codePoint: 0x2706,
    });
}

export function canConvertFromHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "29");

    assert.deepStrictEqual(result, {
        codePoint: 0x2706,
    });
}

export function canConvertFromUppercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "3E");

    assert.deepStrictEqual(result, {
        codePoint: 0x2707,
    });
}

export function canConvertFromLowercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "3e");

    assert.deepStrictEqual(result, {
        codePoint: 0x2707,
    });
}
