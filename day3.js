//Activity 1:IF else statement
//<--Task 1:
let num1=4;
if(num1>0){
    console.log(num1," is positive");
}
else if(num1<0){
    console.log(num1," is negative");
}
else{
    console.log(num1," is zero")
} 
//output:4  is positive

//<--Task 2:
let age=17;
if(age>18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}     
 //Output:Not Eligible to vote

//Activity 2:Nested If-elsse statement
//<--Task 3:
let num2=37;
let num3=46;
let num4=25;
if((num2>num3)&&(num2>num4)){
    console.log(num2,"is largest");
}
else if((num3>num4)&&(num3>num2)){
    console.log(num3,"is largest");
}
else{
    console.log(num4,"is largest");
}    
//Output:46 is largest


//Activity 3:Switch case
//<Task 4:
let day=5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;   
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;    
}  
//output:Friday

//<--Task 5
let marks=89;
let grade=Math.floor(marks/10);
switch(grade){
    case 10:
        console.log("Grade A");
        break;
    case 9:
        console.log("Grade A");
        break;
    case 8:
        console.log("Grade B");
        break;
    case 7:
        console.log("Grade C");
        break;
    case 6:
            console.log("Grade D");
            break;
    default:
        console.log("Grade E");    
}                            
 //Output:Grade B

//Activity4: Conditional(Ternary) Operators
//<--Task 6:
let num5=89;
if((num5%2==0)?console.log(num5,"is even"):console.log(num5,"is odd"));
// Output:89 is odd

//Activity 5:Combining conditions:
//<--Task 7;
let year=2700;
if(((year%4==0)&&(year%100!=0))||(year%400==0)){
    console.log(year+" is a leap year");
}
else{
    console.log(year+" is not a leap year");
}
//OUTPUT:2700 is not a leap year







