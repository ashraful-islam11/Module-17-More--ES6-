// todo:    Module no - 17.4            topic : (Advanced) Closure.


function temporal (){
    let count = 0;

    return function (){
        count++;
        return count
    }
}

let add = temporal();

// console.dir(add);

// console.log(add());
// console.log(add());
// console.log(add());



// cashCounter : coffey and juice: 

function  cashCounter (){
    let amount = 0;

    return function ( payAmount){
        amount+= payAmount;
        return amount;
    }
}

let coffeyBill = cashCounter();
console.log('our total coffey bill: ', coffeyBill(100), 'taka');
console.log('our total coffey bill: ', coffeyBill(100), 'taka');
console.log('our total coffey bill: ', coffeyBill(100), 'taka');
console.log('our total coffey bill: ', coffeyBill(500), 'taka');

let juiceBill = cashCounter();
console.log(`our total juice bills :`, juiceBill(500) , 'taka');
console.log(`our total juice bills :`, juiceBill(500) , 'taka');
console.log(`our total juice bills :`, juiceBill(500) , 'taka');

console.log('our total coffey bill: ', coffeyBill(500), 'taka');

