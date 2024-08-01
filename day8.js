//Activity1: Template literals

//<--Task1:
const name="Pratibha";
const age="19";
let msg=`My name is ${name} and I am ${age} years old.`;
console.log(msg);
//output:My name is pratibha and I am 19 years old.


//<--Task2:
const multilinestr=`hey
how are you
hope you are doing well.`;

console.log(multilinestr);
//Output:
// hey
// how are you
// hope you are doing well.



//Activity2:Destructuring

//<--Task3:
let arr=[2,4,7,9,10];
const [first,second]=arr;
console.log(`First number:${first}`);
console.log(`Second number:${second}`);
//output:
// First number:2
// Second number:4


//<--Task4:
const Book={
    Title : "The Red and the Black",
    Author:"Stendhal",
    Year:1830,
} ; 
const{Title,Author}=Book;
console.log(`Author:${Author}`);
console.log(`Title:${Title}`);
//Output:
// Author:Stendhal
// Title:The Red and the Black


//Activity3:Spread and rest operator

//<--Task5:
const array=[5,0,4];
const newarray=[...arr,...array];
console.log(newarray);
//Output:
// [
//     2, 4, 7, 9,
//    10, 5, 0, 4
//  ]


//<--Task6:
let sum=0
sumFunc=function (...args){
    for(let i of args){
        sum+=i
    }
 return sum;
}
let result=sumFunc (12,67,68);
console.log(result);
//Output:147


//Activity4:Default Parameter

//<--Task7:
function add(a,b=1){
    return a+b;
}
console.log(add(12));
//Output:13


//Activity5:Enhanced Object LIterals
//<--Task8:
const name1="Pratibha";
const age1="19";
const Course="Btech";
const details={
    name1,
    age1,
    study: ()=>Course,
    greet(){
        console.log(`hello everyone.My name is ${this.name1}`)
    }
}
console.log(details.name1);
console.log(details.age1);
console.log(details.study());
details.greet();
//Output:
// Pratibha
// 19
// Btech
// hello everyone.My name is Pratibha


//<--Task9:
const firstname="first name";
const lastname="last name";
Obj={
    [firstname]:"nitu",
    [lastname]:"pal"
}
console.log("firstname:",Obj.firstname);
console.log("lastname:",Obj.lastname);
//Output:
// firstname:nitu
// lastname:pal

