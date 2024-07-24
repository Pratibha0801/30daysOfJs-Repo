//Activity 1:Function Declaration

//<--Task 1:
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
let a=10;
let result= checkEvenOrOdd(a);
console.log(result);
//output:Even


//<--Task 2:
function square(x){
    return x*x;
}
let b=6;
console.log(square(b));
//output:36


//Activity2:Function expression:

//<--Task 3:
function largest(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log("Maximum:",largest(45,78));
//output-Maximum: 78


//<--Task 4:
function concat(str1,str2){
    return str1+str2;
}
console.log("concatenateString:",concat('hello','world'));
//output-concatenateString: helloworld


//Activity 3:Arrow Functions

//<--Task 5:
const sum=(num1,num2) =>num1+num2;
console.log("sum:",sum(10,67));
//Output-sum: 77


//<--Task 6:
const char=(str,char) =>str.includes(char);
console.log(char("hello world","l"));
//output:true


//Activity 4:Function parameters

//<--Task 7:
function product(num1,num2=7){
    return num1*num2;
}
console.log(product(8));
//output:56


//<--Task 8:
function greetingmessage(name,age=17){
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greetingmessage('Nitu'));
//Output:Hello, Nitu! You are 17 years old.


//Activity 5:Higher-order Functions

//<--Task 9:
function call(funct,n){
    for(let i=1;i<=n;i++){
        funct();
    }
}
function hello(){
    console.log("hello");
}
call(hello,4);
//OUTPUT:
//hello
//hello
//hello
//hello


//<--Task 10:
function res(func1,func2){
    return function(value){
        return func2(func1(value));
    };
}
function double(x) {
    return x * 2;
}
const finalresult=res(square,double);
console.log(finalresult(5));
//output:50




