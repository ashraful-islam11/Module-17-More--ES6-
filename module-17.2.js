// todo:        Module no - 17.2            topic: Null vs Undefined and Truthy Falsy.

//*         undefined  :
  
console.log(`
    undefined : 
    1. variable declare but value নেই. 
    2. function e argument নেই. 
    3. object   e property নেই. `);

// *        Null : 

console.log(`
    Null: 
    1. intentional ভাবে, মান খালি রাখার জন্য Null লেখা হয়।`);



//* Undefined :
// step:  1 -- variable :  undefined :
let a ;    // undefined .
console.log(a);  // undefined .


// step: 2 -- function : undefined : 

function sayGreen ( name){
     return `my name is ${name}`;           // parameter হিসেবে, name কে পাঠানো হয়েছে, 
}

console.log(sayGreen());   // function call er time argument হিসেবে কিছুই পাঠানো হয় নি, তাই  undefined দেখাচ্ছে, 

// step: 3 ---- object: 

let person = {
    name: 'ashraful islam',
    age: 20
}

console.log(person.name);       // shundor kaj korteche. 
console.log(person.height);     //  person এর ভেতরে,  height নামে কোনো property nei . ty undefined dibe.


//* Null :

let money = null;
console.log(money);  

// undefined automatic set hoy. but null intentional vabe, set kora hoy. 



// todo:  truthy and falsy:

// JavaScript এ মাত্র 6 টা falsy value থাকে ।  আর এই 6 টা falsy value ছাড়া বাকি সবগুলোই truthy value. 
// সবচেয়ে বেশি, ব্যাবহার হয় : if, condition, ternary operator, default value. 

/**
 * * falsy value:
 * 1. false.
 * 2.  0  
 * 3. ''   mt string. 
 * 4.  null 
 * 5.  undefined 
 * 6. NaN ------ not a number. 

 */

// 1. 
if(false){
    console.log('false');
}else{
    console.log('false is falsy value');
}

// 2. 

if(0){
    console.log('0');
}else{
    console.log('0 is falsy value');
}

// 3. 
if( ''){
    console.log('mt string');
}
else{
    console.log(' "" mt string is falsy value');
}

// 4. 
if(null){
    console.log('null');
}
else{
    console.log('null is falsy value');
}


// 5. 
if(undefined){
    console.log('undefined');
}
else{
    console.log('undefined is falsy value ');
}

// 6. 

if( NaN){
    console.log('nan');
}
else{
    console.log('NaN --> not a number is falsy value');
}



// * truth value: 

if(' '){
    console.log(" ' ' space string is truthy value.");
}

if([]){
    console.log('[] mt array is truthy value ');
}


if('0'){
    console.log(" '0' is truthy value ");
}

console.log(`shudhu 6 ta falsy value chara baki shob gulo truth value `);







