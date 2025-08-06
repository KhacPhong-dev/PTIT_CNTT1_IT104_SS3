"use strict";
let firstName = "john";
let secondName = "doe";
function capitalize(word) {
    if (word.length === 0)
        return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
let fullName1 = firstName + " " + secondName;
console.log(fullName1);
