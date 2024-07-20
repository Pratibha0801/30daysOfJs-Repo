//Activity 1:Airthmetic operations
//<--Task 1:add two numbers and log the result to console.
let num1=2;
let num2=5;
console.log(num1,"+",num2,"=",num1+num2); //output:2 + 5 = 7

//<--Task 2:subtract two numbers and log the result to console.
let num3=10;
let num4=5;
console.log(num3,"-",num4,"=",num3-num4); //output:10 - 5 = 5

//<--Task 3:multiply two numbers and log the result to console.
let num5=2;
let num6=5;
console.log(num5,"*",num6,"=",num5*num6); //output:2 * 5 = 10

//<--Task 4:devide two numbers and log the result to console.
let num7=2;
let num8=5;
console.log(num7,"/",num8,"=",num7/num8); //output:2 / 5 = 10

//<--Task 5:finding the remainder when one number is devided by another and log the result to console:
let num9=45;
let num10=10;
console.log("Remainder when",num9 ,"is devided by ",num10 ," : ",num9%num10); //output:Remainder when 45 is devided by  10  :  5


//Activity 2:Assignment operators
//<--Task 6:use the += operators to add a number to a variable and log the result to console:
let x=36;
var y=20;
x+=y
console.log("Result:",x);  //output: Result: 56

//<--Task 7:use the -= operators to subtract a number to a variable and log the result to console:
let z=36;
z-=y
console.log("Result:",z);  //output: Result: 16


//Activity 3:Comparison operators
//<--Task 8:Compare two numbers using > and < and log the result to the console.
let num11=45;
let num12=10;
console.log(num1>num2);  //output: true
console.log(num1>num2);  //output: false
//<--Task 9: Compare two numbers using >= and <= and log the result to console
console.log("Greater or equal to :" , num11>=num12); // output : Greater or equal to : true
console.log("smaller or equal to :" , num11<=num12); // output : Smaller or equal to : false

//<--task 10:Compare two numbers using == and === and log the result to console.
num1=5;
num2=5;
console.log("Equal to : num1==num2" , num1==num2) ; //output : Equal to : num1==num2 true
console.log("strictly equal to:num1==num2",num1===num2); //output: strictly equal to:num1==num2 true

//Activity 4:Logical operators
//<--Task 11: Program that uses && operator to combine two conditions
console.log((num1>num2)&&(num3>num4)); //output:false

//<--Task 12: Program that uses || operator to combine two conditions
console.log((num1>num2)||(num3>num4)); //output:true

//<--task 13: Program that uses ! operator to negate a condition and log the result to the console
console.log(!(num1>num2)) //output:true

//Activity 5:Ternary operators
//<--Task 14:Program that uses the ternary operator to check if a number is positive or negative and log the result into console
let num=7;
let result=(num>0?"positive":"negative");
console.log(num," is ",result); //output:7  is  positive

//Feature request
//<--1.Airthmetic operators

 num1=5;
 num2=2;

 //addtion
 console.log(num1,"+",num2,"=",num1+num2); //output:5 + 2 = 7

 //subtraction
 console.log(num1,"-",num2,"=",num1-num2); //output:5 - 2 = 3

 //multiply
 console.log(num1,"*",num2,"=",num1*num2); //output:5 * 2 = 10

 //division
 console.log(num1,"/",num2,"=",num1/num2); //output:5 / 2 = 2.5

//remainder
console.log("remainder:",num1%num2);   //output:remainder: 1

//<--2.comparison and logical operator
num3=4;
num4=4;
 //greater than operator
 console.log(num1>num2); //output:true

 //smaller than operator
 console.log(num1<num2); //output:false

 //equal to operator 
 console.log(num4==num3); //output:true

  //strictly equal to operator 
  console.log(num4===num3); //output:true

 //logical AND 
 console.log((num1>num2)&&(num3>num4)) //output:false
 //logical OR
 console.log((num1>num2)||(num3>num4)) //output:true