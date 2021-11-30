/* =============================
          VARIABLES
 =============================*/
/* var = global variable 
 let = local variable
 const = constant */

var name = "Ahana";
var cgpa = 3.398;
console.log(`${name} got ${3.398}`);

//btw var is for old js

//We would be using let and const

let name2 = "Tanim";
let bday = "8th Nov"; //both '' " " is acceptable for declaring string

var country = "Bangladesh";
{
    let city = "Rampura";
    city = "Hazipara";
    let country = "UK";
    console.log(city);
    console.log(country);
}
console.log(country);

//const is for making any variable fixed
//tho in a const array you can add elements
const arr1 =[12,12,3,43,34,4];
arr1.push(23);
console.log(arr1);
//but you can't redeclare same variable in const

/* Case types
camelCase => myName **Recommended**
kebab-case => my-name
snake_case => my_name
PascalCase => MyName */

// DATA TYPE 
// 1. Premitive datatype --> Memory allocation in stack ex. String, Number, boolean, Null, undefined, symbol
// 2. Reference datatype --> Memory allocation in heap ex. arrays, object literals,functions, date
                  /* ===========================
                      PREMETIVE DATATYPE
                   =========================== */
// STRING
let university = 'Aust';
console.log('I study at ' + university);
console.log('The datatype is ' + (typeof university)); //type of the variable
//NUMBER
let credit = 81;
console.log('I have completed '+ credit + 'credit');
//boolean
let bool = true;
console.log('the data type of bool is ' +(typeof bool));
//null
let zero = null;
console.log('the data type of zero is ' +(typeof zero));
//undefined
let undef = undefined;
console.log('the data type of undef is ' +(typeof undef));

                   /*===========================
                      REFERENCE DATATYPE
                   =========================== */
//ARRAY
let list =[23,34,465,6,65,54];
console.log(list);
//OBJECT LITERALS
let marks ={
 Ahana:71,
 Ema:75,
 Mehnaj:80
};
console.log(marks);
//FUNCTIONS
function findNames() {
    
}
console.log(typeof findNames);
//DATE
let date = new Date();
console.log(typeof date);
