"use strict";
let strValue = "2";
let numValue = 2;
// So sánh lỏng (==): tự động chuyển đổi kiểu dữ liệu, nên chuỗi "2" được chuyển thành số 2 -> kết quả true
console.log(strValue == numValue); 
// So sánh chặt (===): so sánh cả giá trị và kiểu dữ liệu, nên "2" (string) khác 2 (number) -> kết quả false

console.log(strValue === numValue); 
