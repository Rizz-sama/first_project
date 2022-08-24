let person = new Object();
person.name = "James";
person.email = "James@gmail.com";
console.log(person);
console.log(person.email);

//object literal
let student = {
    name: "James",
    email: "james@gmail.com",
    hobbies: ["cooking", "swimming", "gaming"],
    address: {
        no: 4,
        street: "paw gyi st",
        city: "Yangon",
    },
}
console.log(student);
console.log(student.email);
console.log(student.hobbies[2]);
console.log(student.address.street);