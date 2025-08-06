
function remove (str : string): string{
    let result1 = " ";
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        if(!result1.includes(char)){
            result1 += char;
    }
    }
    return result1;
}
console.log(remove("Banana"));
