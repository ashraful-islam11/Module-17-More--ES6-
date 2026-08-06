// todo:            Module no - 17.8         topic:  Slice And Reduce .

// slice:   start index    and end after index.

let numbers = [11, 22, 33, 44, 55];

let slice  = numbers.slice(1, 4);
console.log(slice);         // kotha theke shuru hobe and kar age shes hobe .



// reduce : 

let prises = [ 10, 20, 30, 40];

let isReduce = prises.reduce( (accumulator , element , index , array ) => {
        return accumulator + element
},0)

console.log(isReduce);




