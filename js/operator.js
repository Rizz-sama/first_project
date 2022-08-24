let a = 10;
let b = 6;

//arithemetic operator
console.log("sum is ", a+b);
console.log("sub is ", a-b);
console.log("mul is ", a*b);
console.log("div is ", a/b);
console.log("mod is ", a%b);
console.log("exp is ", a**b);
console.log("++a", ++a);
console.log("b++", b++);
console.log("b", b);

// comparison operator
console.log(a==b);
console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);

// assignment operator
a += 2; // a= a+2;
console.log(a);
a -=2;
console.log(a);
// *=, %=, /=;

//logical operator
let c = 4;
let d = 10;

//&& (and)
console.log(c % 2 == 0 && d % 2 == 0);

// || (or)
console.log(c % 3 == 0 || d % 2 == 0);

//!
console.log(c % 2 != 0);

let e = 10;
let f = "10";

console.log(e == f); //value
console.log(e === f); //valuue & datatype
