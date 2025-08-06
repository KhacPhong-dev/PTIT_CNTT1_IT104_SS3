let firstName : string = "john";
let secondName : string = "doe";

function capitalize(word: string): string {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
let fullName1 : string = firstName + " " + secondName; 
console.log(fullName1)