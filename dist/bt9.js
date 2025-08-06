"use strict";
function toNumber(value) {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divine(a, b) {
    return a / b;
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function sqrt(base, root) {
    return Math.pow(base, 1 / root);
}
function factorial(n) {
    if (n < 0)
        return "Không tính được giai thừa âm";
    if (!Number.isInteger(n))
        return "Giai thừa chỉ áp dụng cho số nguyên";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
