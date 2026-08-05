// todo:        Module no- 17.3             topic: ==vs=== and Scope_Hoisting.

// todo:   == equal and === equal.

// * == equal: compare করার আগে প্রয়োজনে, type convert করে নেয়, তাই একে Implicit type conversion বলা হয়।  শুধু value মিলে গেলেই true return করে।  এটা কে  loose equality bole.

//  step: 1. 
if( 5 == '5'){
    console.log(true);
}
else{
    console.log(false);
}

//step: 2. 

if( undefined == null){
    console.log(true);
}
else{
    console.log(false);
}

// step: 3.

if( 0 == false){
    console.log(true);
}
else{
    console.log(false);
}



// * === equality:   type and value  দুটোই আগে মিলতে হবে, কোন conversion হবে না।  predictable ও  bug free so বেশির ভাগ ক্ষেত্রই এটা ব্যাবহার করা হয় । strict equality bole.


if( 5 === '5'){
    console.log(true);
}
else{
    console.log(false);
}

//step: 2. 

if( undefined === null){
    console.log(true);
}
else{
    console.log(false);
}

// step: 3.

if( 0 === false){
    console.log(true);
}
else{
    console.log(false);
}


// todo:   Scop : javaScript have 3 types Scop: 1. global  scop . 2. block scop. 3. function scop.

//* 1. global scop:    variable declare korar pore, jekhan thekhe hok na keno, apni access korte parben. 

let name = 'ashraful islam';

console.log(name);


if(true){
    console.log(name);
}

for( i = 0 ; i<5 ; i++){
    console.log(name , "--->", i);
}


//* block scop:  block scop er vetore kono variable declear korle, shudhu block er vetor thekei access korte prbo. 
 // var diye declare kora variable, shudhu function e meintan kore,
 // let and const , function anc blockScop mainten both kore. 

if(true){
    let fullName = 'Md Ashraful islam';
    console.log(fullName);
}
// console.log(fullName);  // Reference error dibe. 


for( i = 0 ; i<5 ; i++){
   let say = 'hello';
   console.log(say , '-->', i);
}
// console.log(say);         Reference error dibe.       



//* functional Scop:   just function er vator theke access kora jabe. 

function sayHello (){
    let hi = 'hi ashraful '
    console.log(hi);
    return hi
}
// console.log(hi);        // ReferenceError: hi is not defined  

console.log(sayHello());





// todo: Hoisting 

console.log(car);
var car = 'bmw';


// console.log(phone);     // reference error : temporal dead zoon : let and const same 
let phone = 'i phone 17 pro min'
console.log(phone);


console.log(sayGreen());  // function declare korar agei call koreleo kaj korbe. 
function sayGreen (){
    let myName = 'Abir islam';
    return myName;
}



