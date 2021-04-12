/*
alert("Hello World");
console.log("Hello Console");
console.error("This is an error message");
console.warn("This is an warning message"); */

// Var - Global Scope, Let - Reassign Values , Constant - cant change / re-assign
/*
let age = 30;
age=age + age;
console.log(age);
const fruits = ['Apple','Orange','Mango'];
fruits.length;
fruits.push("Banana");
fruits.unshift('plums');
fruits.push("Lemon");
console.log (fruits[0]);
console.log (fruits.length);
console.log(fruits);
console.log (fruits.indexOf("Plums"));
console.log(fruits);
*/

/* Objects
const person = {
    firstName:'John' ,
    lastName:'Simon',
    age:7,
    hobbies:['music','Singing','Playing'],
    address:{
        Street: '53 cumming drive',
        Suburb: 'Hoppers crossing',
        State: 'Victoria',
        postcode : '3029'
    }
}


//console.log(person);
console.log(person.address);
console.log(person.firstName);
console.log(person.address.Suburb);
console.log(person.hobbies[1]);


const { firstName, lastName,address:{State} } = person;
console.log(firstName);
console.log(State);
person.email='john@gmail.com';
console.log(person); */
/*
let a = 111110;
console.log(a);

let colors =['red','blue'];
colors[2] ='green';
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors.length);


// Loops
for(let i=0; i<10;i++)
{
    console.log(`for loop - The Value of I is : ${i}`);
} 

let j=0;
while (j < 10)
{
    console.log(`while loop - The Value of I is : ${j}`);
    j++;
}
// Argument from the caller, parameter is the member passed to the method;
/*
function greet(firstName,LastName) {
    console.log("Hello "+firstName+' '+LastName);
}
greet('John','Simon');
greet('Johan','Simon'); // arguement
*/
 // Arrays of Objects
const todos = [
    {
        id:1,
        text:'take class',
        isComplete:true
    },
    {
        id:2,
        text:'return Home',
        isComplete:true
    },
    {
        id:3,
        text:'Dentist appt',
        isComplete:false
    }
] ; 

/*
console.log(todos);
console.log(todos[1]);
console.log(todos[1].text);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON); 
*/
// forEach, map, filter
/*
todos.forEach(function (todo){
    console.log(todo.text);
});*/

/*
for( let todo of todos){
    console.log(todo.text);
} */

// forEach, map, filter
/*
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isComplete ===true;
});
console.log(todoCompleted);

const todoCompletedFilter = todos.filter(function(todo) {
    return todo.isComplete ===false;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompletedFilter); */

const x ='26'; 
// == checks if the values are same 
if(x ==26){ 
        console.log("X is 26");
}


// === checks if the datatypes are same 
if(x === 26){ 
        console.log("X is 26");
}