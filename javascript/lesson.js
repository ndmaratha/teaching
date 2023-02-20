//Three data types "var","let","const"
// var for older devices
//we use let when we want to change the value later
//we use const when we do not want to change the value

//** OBJECT */
//object is real world thing like car,student
//Styntax  let/const object_name={code}
//we access the values of object with .dot operator 
// as shown in line no 22

var a
let b
const c=12
const developer={
 name:"lalu painter", 
 age:19,
 class:{
    fy:"shivam",
    sy:"nd",
 },
 greeting(){
    console.log("shadi me jarur aana")
 },
}
console.log(developer.age);
console.log(developer.name,"ki");
console.log(developer.greeting());


const khichadi={
masala:"suhana masala",
veg:[1,2,'THREE',3.0,true],
}

console.log("hamare ghar me ",khichadi.masala,"se khichdi banati he");

let human={
   name:"nd",
   age:19,
}
