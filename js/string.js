let sentence = new String("Hello, madafakr")

let word = "hello Javascript"

console.log(word.length)
console.log(word[0])
console.log(word[3])
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.replace("a", "e"))
console.log(word.replaceAll("a", "e"))

console.log(word.slice(2,7))
console.log(word.slice(7,2)) // empty string
// 
console.log(word.substring(2,7))
console.log(word.substring(7,2)) // llo J

console.log(word.slice(1))
console.log(word.substring(2))

console.log(word.indexOf("o"))
console.log(word.indexOf("a"))
console.log(word.lastIndexOf("a"))

console.log(word.startsWith("e"))
console.log(word.endsWith("t"))

console.log(2+4)
console.log("hi" + "hello")

// concatenation 
let name = "Alice"
let age = 12
console.log("My name is " + name + " and age is " + age)

// template string
console.log(`My name is ${name} and age is ${age}`)

// character escape
let word1 = 'It\'s 11 o\'clock'
console.log(word1)

let word2 = "she is 5'2\" tall"
console.log(word2)