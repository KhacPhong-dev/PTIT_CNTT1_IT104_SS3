"use strict";
const fullName = "Nguyen Khac Phong";
const age = 20;
const job = "Sinh viên";
function printperson(fullName, age, job = "unknown") {
    console.log("Fullname: ", fullName);
    console.log("Age: ", age);
    console.log("Job: ", job);
}
printperson(fullName, age, job);
printperson(fullName, age);
