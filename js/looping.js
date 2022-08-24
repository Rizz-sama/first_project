//for (initial; end; increment)
for (let i = 0; i < 7; i+=2) {
    console.log(i);
}

const fruits = ["apple","orange","mango","kiwi","grapes", "watermelon"];
fruits.push("strawberry")
for (let i = 0; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

//while
let a = 0; //initial
while(a <= 5) {
    console.log(a);
    a++;
}

//do while
let b = 0; //initial
do {
    console.log(b);
    b+=2; //increment
} while (b<=10) // end

//foreach

// fruits.forEach(function(f) {
//     console.log(`fruits name is ${f}`)
// });

fruits.forEach(f => {
    console.log(`fruits name is ${f}`)
});


const todos = [
    {id:1 , title: "gamming" , isCompleted: false},
    {id:2 , title: "boxing" , isCompleted: true},
    {id:3 , title: "gym" , isCompleted: false},
    {id:4 , title: "football" , isCompleted: false},
    {id:5 , title: "paying" , isCompleted: true},
    {id:6 , title: "cards" , isCompleted: true},
]

// Map
// const todosMap = todos.map(function(todo) {
//     return todo.title.toUpperCase();
// });
// console.log(todosMap)

const todosMap = todos.map(todo => {
    return todo.title;
} );
console.log(todosMap)

//filter
const todoFilter = todos.filter(function(todo)
{
    return todo.isCompleted == true
})
console.log(todoFilter)

// const todoFalse = todos.filter(function(todo) {
//     return todo.isCompleted == false;
// })
// console.log(todoFalse);
// const todoTitle = todoFalse.map(function(todo) {
//     return todo.title;
// })
// console.log(todoTitle)


const todoTitle = todos
    .filter(todo => todo.isCompleted == false)
    .map( todo => todo.title);

    console.log(todoTitle)