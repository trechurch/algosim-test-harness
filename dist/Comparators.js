export function compareNumber(result, expected, testSL, sl) {
    if (result.type !== 'number')
        return false;
    const epsilon = 1e-10;
    const pass = Math.abs(result.value - expected) < epsilon;
    if (testSL && pass)
        return result.getAsSingleLineText?.() === sl;
    return pass;
}
export function compareString(result, expected, testSL, sl) {
    if (result.type !== 'string')
        return false;
    const pass = result.value === expected;
    if (testSL && pass)
        return result.getAsSingleLineText?.() === sl;
    return pass;
}
export function compareArray(result, expected, testSL, sl) {
    if (result.type !== 'array')
        return false;
    return true; // Stub
}
export function compareRGB(result, expected, testSL, sl) {
    if (result.type !== 'rgb')
        return false;
    const { r, g, b } = result.value;
    return r === expected.r && g === expected.g && b === expected.b;
}
export function compareHSV(result, expected, testSL, sl) {
    if (result.type !== 'hsv')
        return false;
    const { h, s, v } = result.value;
    return h === expected.h && s === expected.s && v === expected.v;
}
export function compareHSL(result, expected, testSL, sl) {
    if (result.type !== 'hsl')
        return false;
    const { h, s, l } = result.value;
    return h === expected.h && s === expected.s && l === expected.l;
}
export function compareSignal(result, expected, testSL, sl) {
    if (result.type !== 'signal')
        return false;
    return result.value === expected;
}
export function compareRational(result, expected, testSL, sl) {
    if (result.type !== 'rational')
        return false;
    const { num, den } = result.value;
    return num === expected.num && den === expected.den;
}
