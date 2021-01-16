import assert from "assert";

import * as dingbatToUnicode from "../";

export function canConvertFromDingbatCodePointToUnicode() {
    const result = dingbatToUnicode.codePoint("Wingdings", 41)!!;

    assert.strictEqual(result.codePoint, 0x2706);
}

export function canConvertFromDecimalDingbatToUnicode() {
    const result = dingbatToUnicode.dec("Wingdings", "41")!!;

    assert.strictEqual(result.codePoint, 0x2706);
}

export function canConvertFromHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "29")!!;

    assert.strictEqual(result.codePoint, 0x2706);
}

export function canConvertFromUppercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "3E")!!;

    assert.strictEqual(result.codePoint, 0x2707);
}

export function canConvertFromLowercaseHexDingbatToUnicode() {
    const result = dingbatToUnicode.hex("Wingdings", "3e")!!;

    assert.strictEqual(result.codePoint, 0x2707);
}

export function returnedValueIncludesCodePoint() {
    const result = dingbatToUnicode.hex("Wingdings", "29")!!;

    assert.strictEqual(result.codePoint, 0x2706);
}

export function whenUnicodeCodePointIsInBmpThenReturnedValueIncludesString() {
    const result = dingbatToUnicode.hex("Wingdings", "29")!!;

    assert.strictEqual(result.string, "\u2706");
}

export function whenUnicodeCodePointIsInAstralPlaneThenReturnedValueIncludesString() {
    const result = dingbatToUnicode.hex("Wingdings", "28")!!;

    assert.strictEqual(result.string, "🕿");
}

export function typefaceIsCaseInsensitive() {
    const result = dingbatToUnicode.codePoint("wingDingS", 41)!!;

    assert.strictEqual(result.codePoint, 0x2706);
}
