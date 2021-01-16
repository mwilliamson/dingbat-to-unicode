import assert from "assert";

import dingbatToUnicode from "../";

export function canConvertFromHexDingbatToUnicode() {
    const result = dingbatToUnicode({typeface: "Wingdings", hex: "29"});

    assert.deepStrictEqual(result, {
        codePoint: 0x2706,
    });
}

export function canConvertFromUppercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode({typeface: "Wingdings", hex: "3E"});

    assert.deepStrictEqual(result, {
        codePoint: 0x2707,
    });
}

export function canConvertFromLowercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode({typeface: "Wingdings", hex: "3e"});

    assert.deepStrictEqual(result, {
        codePoint: 0x2707,
    });
}
