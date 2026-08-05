// todo:            Module no - 17.6                topic: Pass by value, pass by reference, Pre and post increment.

// pass by value:  ( pass by value - primitive data type: string , number, null, boolean, undefined :)

// string: 
let myName  = 'ashraful';
console.log(myName);

function  checkPassByValue (name){
     name = 'ashraful islam';
     return name;
}
console.log(checkPassByValue(myName));      //  ashraful islam .

console.log(myName);                // ashraful . 



// number : 

let age = 20;

function checkPassByValueAge  (myAge){
    myAge = 30;
    return myAge;
}
console.log(checkPassByValueAge(age));      // 30

console.log(age);  // 20.



//*  pass by reference : ( pass by reference : --> non primitive data type: Object , Array , function.)

// object: pass by reference :
let person ={
    name: 'Abir islam',
    age: 6,
    relation : 'my brother',
    home : 'natore'
}
console.log(person);

function checkPassByReference( reference){
     person.name = 'md Abir islam';
     return person
}

console.log(checkPassByReference(person));      // name = 'md Abir islam' . change. 
console.log(person);        // name = 'md Abir islam' . change.  reference share kore ty value change hoiche. 



// array :  pass by reference : 

let numbers = [ 10, 20, 30, 40, 50];
console.log(`original array elements :`, numbers);

function checkPassByReferenceArray ( data){
    numbers[0] = 100;
    return numbers;
}
console.log(checkPassByReferenceArray(numbers)); // first element is change : 100.

console.log(numbers);       // non primitive data reference share kore ty original Array change hoiche. 




// todo:        pre and post increment.

// post increment :  number++;  আগে কাজ করবে তারপরে, update hobe.

let family = 6;
    console.log(family++);
    console.log(family++); // age kaj kore, pore update hobe. 

    let c = 2;
   let b = ++c;         // age update holo, pore kaj korbe. 
   console.log(b);


// todo:    pre and post decrement: 

let x = 9;
console.log(x--);
console.log(x--);


let y = 15;
let z = --y;
console.log(z);