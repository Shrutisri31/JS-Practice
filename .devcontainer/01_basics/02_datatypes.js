//Lecture - 2
"use strict"; // treat all JS code as newer version

// alert(2 + 5); // we're using node.js not browser, so it can't be used.
console.log(3 + 5);

let age = 10; //Number
let Fname = "XYZ";  //String
let isLoggedIn = false;  //boolean
let city = null; //null
let state;  //undefined
console.table([age,Fname,isLoggedIn,city,state]);

/* 2 types of datatype in JS:
1. Primitive datatype
2. Non-primitive datatype

Primitive datatypes:
1. Number  (range = 2^53)
2. BigInt
3. String - can be used in (''/"")
4. Boolean => true/false
5. null => standalone value (empty value)
6. undefined => variable declared, but not defined
7. symbol => unique

Non-Primitive Datatypes
1. Object
*/

console.log(typeof null);  //value [Object]
console.log(typeof undefined); //value [undefined]
