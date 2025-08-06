const fullName : string = "Nguyen Khac Phong";
const age : number= 20;
const job : string= "Sinh viên";

function printperson(fullName: string, age:number, job : string = "unknown"):void{
    console.log("Fullname: ", fullName);
    console.log("Age: ", age);
    console.log("Job: ", job);
} 
printperson(fullName, age, job);
printperson(fullName, age);