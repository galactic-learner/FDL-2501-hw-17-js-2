let a = Number(prompt("Enter number 1:"));
let b = Number(prompt("Enter number 2:"));

// result of (a+b)**2
let result = (a*a + 2*a*b + b*b);

let resultPrint = document.querySelector(".result");

resultPrint.innerHTML= result;

