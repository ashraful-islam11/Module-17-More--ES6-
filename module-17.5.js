//todo:             Module no - 17.5              topic:   Callback Function.

function registerStudent (cb){
     console.log(`user is registering. need more data.`);
     cb()
}


function userBasicInfo ( ){
     
    let person = {
        name : 'Ashraful islam',
        age : 20,
        profession: 'student'
    }
    console.log(person);
}

function academicInfo(){
     let  gpa= {
        ssc : 'gpa 5',
        hhc : 'gpa 5'
     }
     console.log(gpa);
}


registerStudent(userBasicInfo);
registerStudent(academicInfo)





function calculator (a, b, callback  ){
    let sum = a + b;
    // console.log(sum);
    callback( sum)
}


function displayResult (result ){
    console.log(result);
}
calculator(5,5, displayResult)
calculator( 50, 50, displayResult)


