var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "10", quantity: "2", }
];
console.log(itemsArray[0].price*itemsArray[0].quantity)
console.log(itemsArray[1].price * itemsArray[1].quantity)
console.log(itemsArray[2].price * itemsArray[2].quantity)
console.log(itemsArray[3].price * itemsArray[3].quantity)
var item = {
    name : "rewrewr",
    email: "adfasfs",
    pasword: "fffsf",
    age: "age",
};
if ("name" in item === true) {
    console.log(" yes")
}
else{console.log("nothing")}
if ("email" in item === true) {console.log ("u are") }
else { console.log("u win ")}


// constructor function
function Person() {
    this.name = 'John',
        this.age = 23
}

// create an object
const person = new Person();

constructor function
function Person() {
    this.name = 'John',
        this.age = "23",
        this.gender ="male"

   
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("John Doe", 23);

console.log(person.name,person.age); // expected output: "John Doe"0
