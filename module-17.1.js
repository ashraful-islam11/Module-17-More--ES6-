// todo:   Module no - 17.1             topic: Module Overview: Primitive ও Non-Primitive Data Types


// data type :  data type কত প্রকার ? 
console.log(
    ` javaScript এ data type ২ প্রকার :
      1. primitive data type. 
      2. non primitive data type.    `);

// * Primitive data type and Non-primitive data type: 

// * 1. primitive data type: 
  console.log(`
     * primitive data type: 
     1. string .
     2. number.
     3. boolean.
     4. undefined.
     5. Null.
     6. symbol.
     7. bigInt. `);


// * 2. Non-primitive data type: or Reference data type.
    console.log(`
      * Non-primitive data type or Reference data type:
      1. Array.
      2. Object.
      3. function.  `);

    
    // example: primitive data type:
     // 1. immutable :  

    let a = 10;             // 10
    let b = a;              //  b = 10.  b শুধু মান পেয়েছে, 10.

        b = 20;             //  b = 20    b এর মান নতুন করে assign করা হয়েছে, 20. 

    console.log(b);         // 20  b এর মান ২০ ঠিক আছে। 
    console.log(a);         // 10  b = a হলে, a এর মান ১০ কেন? ২০ কেন নয়?  কারনঃ  তুমি explain কর !



    // example:  Non-Primitive data type:
    // 1. mutable. 

    let person = {
        name: 'ashraful islam',   
    }

    let person2 = person;       // person2 = {name: 'ashraful islam' }
        person2.age = 20;       // person2 e নতুন মান add করা হলো  age = 20.

    console.log(person2);       // person2 = { name : 'ashraful islam' , age : 20}
    console.log(person);        // person = { name: 'ashraful islam', age: 20}  এখানে age কেন add হলো।
    // কারন, Non-primitive data type এ , শুধু মান নয়, Reference বা address রেখে দেয়। তাই, person2 = person তাই, person2 এ নতুন করে,  property add করায়, person এও  add হয়েছে।। 


 
   
