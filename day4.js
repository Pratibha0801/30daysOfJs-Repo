//Acitvity 1:For loop
//<--Task 1:

for(let i=1;i<=10;i++){
    console.log(i);   
}
//output:1 2 3 4 5 6 7 8 9 10

//<--Task 2:
for(let i=1;i<=10;i++){
    console.log(i*5);
}
//output:5 10 15 20 25 30 35 40 45 50


//Activity 2:While loop
//<--Task 3:
let i=1;
let sum=0;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("Sum of numbers: ",sum); 
//output: Sum of numbers:  55

//<--Task4 :
i=10;
while(i>=1){
    console.log(i);
    i--;
}
// output:10 9 8 7 6 5 4 3 2 1


//Activity 3:Do while loop
//<--Task 5:
i=1;
do{
    console.log(i);
    i++;
}
while(i<6);
//output:// output : 1 2 3 4 5

//<--Task 6:
let fact=1;
i=5;
do{
    fact=fact*i;
    i--;
}
while(i!=0);
console.log("5!=",fact);
//output: 5!= 120


//Activity 4:Nested loops
//<--Task 7;
for(let i=1;i<=5;i++){
    let space="";
    for(let j=1;j<=i;j++){
        space=space+"* ";
    }
    console.log(space);
}
//Output:
//* 
//* * 
//* * * 
//* * * * 
//* * * * * 


//Activity 5:Loop control statements
//<--Task8:
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  //Output: 1 2 3 4 6 7 8 9 10
 
//<--Task9:
for (let i = 1; i <= 10; i++) {
    if(i==7){
        break;
    }
    console.log(i);
}
//Output: 1 2 3 4 5 6

