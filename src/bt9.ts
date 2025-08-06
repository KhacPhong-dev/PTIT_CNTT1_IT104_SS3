function toNumber(value: string): number | null{
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}
function add(a: number, b: number): number{
    return a + b;
}
function subtract(a: number, b: number):number{
    return a- b;
}
function multiply(a: number, b:number): number{
    return a*b;
}
function divide(a: number, b: number): number{
    return a / b;
}
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number | string {
  if (n < 0) return "Không tính được giai thừa âm";
  if (!Number.isInteger(n)) return "Giai thừa chỉ áp dụng cho số nguyên";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function handleOperation(operation: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const resultEl = document.getElementById("result")!;

  const num1 = toNumber(input1);
  const num2 = toNumber(input2);

  let result: number | string = "";

  if (operation === "factorial") {
    if (num1 === null) {
      result = "Vui lòng nhập số hợp lệ";
    } else {
      result = factorial(num1);
    }
  } else {
    if (num1 === null || num2 === null) {
      result = "Vui lòng nhập hai số hợp lệ";
    } else {
      switch (operation) {
        case "add":
          result = add(num1, num2);
          break;
        case "subtract":
          result = subtract(num1, num2);
          break;
        case "multiply":
          result = multiply(num1, num2);
          break;
        case "divide":
          result = divide(num1, num2);
          break;
        case "power":
          result = power(num1, num2);
          break;
        case "sqrt":
          result = sqrt(num1, num2);
          break;
        default:
          result = "Phép toán không hợp lệ";
      }
    }
  }

  resultEl.textContent = `Kết quả: ${result}`;
}