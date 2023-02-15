const student={
    name:"nd",
    age:19,
    rolono:1200,
    class:"sybca",
    hi:function greeting(){
    console.log("hello");
    },
};

const person={
 name:"baburav",
 age:19,
 greeting(){
    console.log("hello ok");
 },

 a:{
 s:"hi",
 y:{
    abc:'nd',
 },
 },
};

//we access the object using dot. operator
//syntax of object is const obj={};
//we use collon : to assign values
console.log(person.a.y.abc);
console.log("this is a roll no of nikhil",student.rolono);