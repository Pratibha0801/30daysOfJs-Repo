//Activity1:Array Creation and Access

//<--Task1:
let arr=[1,2,3,4,5];
console.log(arr);
//Output:
//[ 1, 2, 3, 4, 5 ]

//<--Task2:
console.log("First element:",arr[0]);
console.log("Last element:",arr[arr.length-1]);
//Output:
//First element: 1
//Last element: 5


//Activity 2:Array methods(Basic)

//<--Task3:
console.log("Updated array:");
arr.push(6);
console.log(arr);
//Output:
//Updated array:
//[ 1, 2, 3, 4, 5, 6 ]


//<--Task4:
console.log("Updated array:");
arr.pop();
console.log(arr);
//Output:
//Updated array:
//[ 1, 2, 3, 4, 5 ]


//<--Task5:
console.log("Updated array:");
arr.shift();
console.log(arr);
//Output:
//Updated array:
//[ 2, 3, 4, 5 ]



//<--Task6:
console.log("Updated array:");
arr.unshift(10);
console.log(arr);
//Output:
//Updated array:
//[ 10, 2, 3, 4, 5 ]



//Activity3: Array methods (intermediate)

//<--Task7:
let doubledarr = arr.map(num => num * 2);
console.log("Doubled array");
console.log(doubledarr);
//Output:
//Doubled array
//[ 20, 4, 6, 8, 10 ]



//<--Task8:
let filteredarr=arr.filter(num=>num%2===0);
console.log("filtered array:");
console.log(filteredarr);
//Output:
//filtered array:
//[ 10, 2, 4 ]


//<--Task9:
let sum=arr.reduce((value1,value2)=>value1+value2,0);
console.log("sum:",sum);
//output- sum: 24


//Activity 4:Array iteration

//<--Task10:
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//output:
//10
//2
//3
//4
//5


//<--Task 11;

arr.forEach((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});
//Output:
//Element at index 0 is: 10
//Element at index 1 is: 2
//Element at index 2 is: 3
//Element at index 3 is: 4
//Element at index 4 is: 5



//Activity 5:Multi-dimensional array

//Task 12:

let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArray);
//output:[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


//<--Task 13:

console.log("Element at [0][0]:", multiArray[0][0]); // Output: 1
console.log("Element at [1][2]:", multiArray[1][2]); // Output: 6
console.log("Element at [2][1]:", multiArray[2][1]); // Output: 8
