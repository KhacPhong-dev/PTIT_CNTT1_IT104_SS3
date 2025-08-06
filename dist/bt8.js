"use strict";
function toNumber(value) {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        console.log("Giá trị không hợp lệ");
    }
    return num1 + num2;
}
function subtraction(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        console.log("Giá trị không hợp lệ");
    }
    return num1 - num2;
}
function multiply(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        console.log("Giá trị không hợp lệ");
    }
    return num1 * num2;
}
function divine(a, b) {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        console.log("Giá trị không hợp lệ");
    }
    if (num2 === 0) {
        console.log("Khong chia được cho 0");
    }
    return num1 / num2;
}
console.log(add(10, "5"));
console.log(subtraction("45", 7));
console.log(multiply("4", "7"));
console.log(divine(80, 10));
