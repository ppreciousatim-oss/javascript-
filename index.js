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

//Alevel grading system
// loops help us to look through an array and return a specific item 
let marks = 15;
if (marks >=80) {
    console.log("Grade: A")
} else if (marks >=70) {
    console.log("Grade: B")
} else if (marks >=60) {
    console.log("Grade C")
}else if (marks >=50) {
    console.log("Grade D")
} else if (marks >= 40) {
    console.log("Grade E")
} else if(marks >=30) {
    console.log("Grade o")
} else (marks <=30) 
    console.log("Grade F")


let scores =[
{name: "Precious", score: 85},
{name: "Lebron", score: 56},
{name: " Alvim", score: 78},
{name: "liz", score: 65},
{name: " Remmy", score: 68}
]
scores.forEach(student =>{
    let Grade;
    if (student.score >= 90) {
        grade = "A"
    }else if (student.score >= 80){
        grade = "B"
    }else if (student.score >= 70){
        grade = "C"
    }else if (student.score >= 60){
        grade = "D"
    }else if (student.score >= 50){
        grade = "E"
    }else if (student.score >= 40){
        grade = "O"
    }else {
        grade = "F"
    }
    console.log(student.name + ";" + student.score+ " And my grade is" + grade)
})


//functions
// functions are reusable blocks of code that perform a specific task. They can take parameter and return values
// function declaration //we use the function keyword to declare a function 

function functionName() {
    //code to be executed
}

function funcName(parameter) {
    // code to be executed
    return parameter; // returning the parameter
}
 
function funcwithparameter(parameter1, parameter2, parameter3){
    //code to be executed 
    return parameter1 + parameter2 + parameter3; // returning the sum of parameters
}

//working example of a function 
function returnsomevalues() {
    let value ="This is my first working function in javascript";
    console.log(value);
}

returnsomevalues(); //this is how we call a function to execute the code inside it 

function returnparameter(parameter) {
    return parameter;
}

// console.log(returnparameter("Hello,this my second function in javascript"));
const result = returnparameter("Hello,this is my second function in javascript");
console.log(result);

function addNumbers(x, y) {
    return x + y;
}
const sum = addNumbers(4, 5);
console.log(sum);



//loops
//1. for loop
// incrementing for loop

for (let i = 0; i ; i++) {
    console.log(i);
}

//decrementing for loop
for (let i = 7; i > 0; i--) {
    console.log(i);
}

const myCars = ["volvo", "Benz", "kia", "toyota"];
console.log(myCars);
const numberofCars = myCars.length; //gives you the number of items in the array
console.log(numberofCars);
const kiaPosition = myCars.indexOf("kia");
console.log("The position of kia in the array is" + kiaPosition);


for (let i = 0; i < myCars.length; i++) {
    console.log(myCars[i]);
}


for ( let car of myCars) {
    function printCarPosition (car){
    const index =myCars.indexOf(car);
    console.log("The position of" + car + "in the array is" +index);
   }
   printCarPosition(car);
   console.log(car);
}

//2. while loop
// while (condition) {
    //code to be executed as long as the condition is true

// }

let id = 0;
while (id < 7) {
    console.log("from the while loop", id);
    id++;
}

//decrementing while loop
let id2 = 8;
while (id2 > 0) {
    console.log("from the while loop", id2);
    id2--;
}


let password ="";
 while (password !== "1234") {
    password = prompt("Enter your password");
 }
 //do-while loop
 // do {
    //code to be executed
// } while (condition);

let i = 0;
do {
    console.log("from the do-while loop", i);
    i++;
} while (i < 7);