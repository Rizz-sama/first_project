function add(num1=0,num2=0) {
    return num1 + num2;
}
console.log(add(1,2));
console.log(add()); //if num1 & num2 not defined, NaN (not a number) error
console.log(add(2));

const sum = (num1=1, num2=3) => num1 + num2;
console.log(sum(5,6));

