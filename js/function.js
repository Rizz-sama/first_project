function hello() {
    console.log("hello");
} 

hello();

function greet(name) {
    console.log(name);
}

greet("Andy");

function nums (num1, num2) {
    console.log(num1, num2);
}
nums(1,2);
// ES6 arrow function 

const sayHello = name => {
    console.log(`${name} says "Hi!!"`);
}

sayHello("James");


const sayHi = _ => {
    console.log("Hi!!");
}
sayHi();

const sum = (num1,num2) => console.log(num1 + num2);
sum(1,2);

function sub() {
    console.log("start");
    return "hello";
    console.log("end");
}

console.log(sub());




