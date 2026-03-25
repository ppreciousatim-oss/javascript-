// variables
//how can u store variables
//declaring a variable using keywords var,let,const
//var is function-scoped & can be declared 
var name= "Precious";
console.log(name)
name= "Atim Precious"
//let is block-scoped& can be updated but not declared
let age= 20;
console.log(age);
age="21"
console.log("my age has changed because i am a girl")

//const is block-scoped & can not be updated or decalred
const country= "uganda";
console.log(country);
//data types
//javascript has several data types including
//1 String
let greeting="Hello, how are you?"
console.log(greeting);
console.log(typeof greeting);
//2 Number
let x=10;
let y="20"
console.log(x);
console.log(y);
console.log(typeof x);
console.log(typeof y);


//3. Boolean
//4. undefined
// 5. Null

//6. Symbol
//Explanation of symbol data type 
//Mathematical operations
let a = 5;
let b = 3;
console.log(a+b); //addition
console.log(a-b); //subtraction
console.log(a*b); //multiplication
console.log(a/b); //division
console.log(a%b); //modulus
console.log(a**b); //Exponentiation

//conditionals in javascript
//if statement
// definition of if statement
let condition = true;
let condition1 = false;
let condition2 = false;
let condition3 = true;

if (condition){
    //code to be executed if condition is true
}
//if-else statement 
// definition of if-else statement
if (condition){
    // code to be executed if condition is true 
}else {
    //code to be executed if condition is false
}
// else-if statement
//definition of else if statement
if (condition) {
//code to be executed if condition1 is true 
}else if (condition2) {
    //code to be executed if condition2 is true
}else {
    //code to be executed if both condition1 and condition2 are false
}


//practice example
let mark = 75;
if (mark > 80) {
    console.log("very good you have passed the exam")
}

if (mark >=70){
    console.log("you have passed the exam")
}else {
    console.log("you have failed the exam")
}
//comparison operators
// 1. Equal to (==)
//2. not equal to (!=)
//3. strict equal to (===)
//4. strict  not equal to (!==)
//5. Greater than (>)
//6. less than (<)
//7. greater than or equal to (>=)
//8. less than or equal to (<=)

//arrays
// an empty array
["volvo", "Benz", "kia", "toyota"]
[1, 2, 3, 4, 5]
// ["Precious", 20, "uganda", true, null, undefined, {name: "Peace"}]

let cars = ["volvo", "Benz", "kia", "toyota"]
console.log(cars);
console.log(cars[0]); // Assessing the first element

let mixedArray = ["Precious", 25, "uganda", true, null, undefined, {name: "john"}];
console.log(mixedArray);
console.log(mixedArray[6])

//objects
{}// an empty object

let person = {
    name: "Precious",
    age: 20,
    country: "uganda",
    isStudent: false,
    hobbies: ["coding", "travelling", "swimming"],
    address:{
        street: "123 Main st",
        city: "kampala",
        country: "uganda"
    }

}
console.log(person);
console.log(person["name"]); // Acessing the name property
console.log(person.hobbies); 
console.log(person.hobbies[1])// Acessing the second hobbies

