let strValue : string = "2";
let numValue : number = 2 ;
console.log(strValue == numValue); // đây là so sánh lỏng và do vậy nên dữ liệu string có thể chuyển sang thành number và trở về true
console.log(strValue === numValue);// đây là so sánh chặt, cả 2 có kiểu dữ liệu khác nhau nên trả về false