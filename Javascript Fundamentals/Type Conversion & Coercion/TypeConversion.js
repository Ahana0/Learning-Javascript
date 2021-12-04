console.log("Welcome Dear");

// TYPE OF VARIABLES
let myVar = 23;
console.log(myVar,(typeof myVar));

//CONVERSION
let myVar1= String(43);
console.log(myVar1,(typeof(myVar1)));

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

//length of an array
let array = [1,2,3,4,5,6,7];
console.log(array.length,(typeof array));

//converting into string .toString
let i = 34;
console.log(i.toString());

//string to number
let num = Number('74');
console.log(num,(typeof num));

//parseint
let num1 = parseInt(87.009);
console.log(num1);

//parseFloat
let num2 = parseFloat(53.0987);
console.log(num2.toFixed(8)); //toFixed is for fixing values after point

                                       //COERCION
let str="346";
let myNum= 78;
console.log(str+myNum);

let str2 = Number("987");
let myNum2 = 63;
console.log(str2+myNum2);



