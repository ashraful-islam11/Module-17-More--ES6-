// todo:        Module no - 17.7        topic:  Array Power Methods — map, forEach, filter, find

// * map:জাভাস্ক্রিপ্টের map() একটা অ্যারে মেথড, যা প্রতিটা এলিমেন্টের ওপর একটা কলব্যাক ফাংশন চালায় এবং সেই ফাংশনের রিটার্ন ভ্যালুগুলো দিয়ে একটা নতুন অ্যারে বানায়. but original array in change আনে না। 

let numbers = [ 2, 4, 6, 8, 10] ;
console.log('our original array :',numbers);
// ekhun ami cai je , numbers er all elements gulo double korbo. 

 let doubled = [];
for( let i = 0 ; i <numbers.length; i++){
     doubled.push(numbers[i] * 2);
}
// console.log(doubled);


// * map methods diye khub easy te kora jay. 
// traditional function diye map korlam: 
let runMap = numbers.map( function (num){
      return num * 2 ;
})
console.log(runMap);


// ES6  arrow function diye shohoje kora jay.

let doubleOfMap = numbers.map(number => {
    return number * 2 ;
})
console.log(doubleOfMap);

//  যেহেতু ১ লাইনেই return করা যায়, তাই আমরা ১ লাইনেই return করব:

let doubleOfMapSingleLine = numbers.map(num => num * 3);
console.log(doubleOfMapSingleLine);

// original array no changed. 
console.log( 'this is our original array. no changed ', numbers);


//*  for each : forEach() = প্রতিটি element-এর উপর কাজ করবে, কিন্তু নতুন Array তৈরি করবে না।
console.log('~~~~~~~~~~ forEach ~~~~~~~~~~~~~~');

let oddsNumbers = [ 1, 3, 5, 7, 9, 11];

// forEach --> element, index, total Array, takei dibe. 

let forEach = oddsNumbers.forEach((Element, index, fullArray) => {
    console.log(Element,index,fullArray);
} ) 



//* filter method : filter() হলো JavaScript-এর একটি Array Method, যা একটি অ্যারের প্রতিটি element-এর উপর callback function চালায় এবং যে element-গুলো নির্দিষ্ট শর্ত (condition) পূরণ করে, শুধু সেগুলো নিয়ে একটি নতুন Array তৈরি করে।


let ExpensiveProduct = [
    {
        name: 'car',
        prise: 2000000
    },
    {
        name: 'riksha',
        prise: 150000
    },
    {
        name: 'laptop',
        prise: 100000
    },
    {
        name: 'bike',
        prise: 200000
    },
    {
        name: 'watch',
        prise: 23000
    },
    {
        name: 'sunGlass',
        prise: 2000
    },
    {
        name: 'shirt',
        prise: 500
    }
];


let Expensive = ExpensiveProduct.filter( money =>  money.prise >= 100000);
console.log(Expensive);

let lowestProduct = ExpensiveProduct.filter( taka => taka.prise <= 25000);
console.log(lowestProduct);



//* find : find() হলো JavaScript-এর একটি Array Method, যা একটি অ্যারের প্রতিটি element-এর উপর callback function চালায় এবং যে প্রথম element নির্দিষ্ট condition পূরণ করে, শুধু সেই element-টি return করে।

let firstElement = ExpensiveProduct.find( fast => fast.name='car');
console.log(firstElement);


let findEvenNumber = [ 11, 33, 55, 22, 44, 66, 88, 100];

let findEven = findEvenNumber.find( firstEven => firstEven % 2 === 0);
console.log(findEven); // 22 





// ✅ find() প্রথম matching element return করে।

// ✅ Original Array পরিবর্তন করে না।

// ✅ যদি কোনো element condition পূরণ না করে, তাহলে undefined return করে।

// ✅ প্রথম match পাওয়ার পর আর loop চালায় না।