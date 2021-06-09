function fizzbuzz(input){

if (  input % 3 ===0 && input % 5 ===0){
return " fizz \n buzz \n fizzbuzz";
}
if (input % 3 ===0) { 
    return "fizz";
}
if (input % 5 ===0) {
    return "buzz";
}
return input;
}

let output=fizzbuzz(30);
console.log(output);