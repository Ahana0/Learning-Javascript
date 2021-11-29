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
