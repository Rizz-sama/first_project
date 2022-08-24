let a = 5;
//if
if(a > 0) {
    console.log("a is positive");
}

//if - else
if(a > 0) {
    console.log("a is positive");
} else {
    console.log("a is negative");
}

//if - else - if
if(a > 0) {
    console.log("a is positive");
} else if (a < 0) {
    console.log("a is negative");
} else if (a == 0) {
    console.log("a is 0");
} else {
    console.log("a is unknown number");
}

//switch
let b = "red";
switch(b) {
    case "green":
        console.log("It is green");
        break;
    case "red":
        console.log("It is red");
        break;
    case "yellow":
        console.log("It is yellow");
        break;
    default:
        console.log("It is unknown");
        break;
}
