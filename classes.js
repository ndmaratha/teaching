class student{
 constructor(rollno,name,age,sub){
  this.rollno=rollno;
  this.name=name;
  this.age=age;
  this.sub=sub;
 };

 codersclub={//this is a object 
  name:"aalu",//this are the values under student class under codersclub object
  work:"chidimar",
 }
}
//to acess the values under the student class 
//we use dot operator 

const nikhil=new student(1,"nikhil don he",50,"gym trainer");
const bhariporagi=new student(2,"nikhil chi crush",19,"client of nikhil");
//to access the name and age of bhariporagi we use bhariporagi.age
console.log(bhariporagi.name,bhariporagi.age);
console.log(nikhil.human);
console.log("the work going in coders club is",bhariporagi.codersclub.work);

//we use constructer because we want to avoid the decelaration
//showing below
const siddharth=new student();
siddharth.rollno=3;
siddharth.name="don";
siddharth.age=20;

console.log(siddharth.rollno);
