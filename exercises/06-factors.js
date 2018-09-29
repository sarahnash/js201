// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors(number){
    var myArr = []
    //for the number, push a factor into my empty Array using if modulo = 0
    for (var i = 0; i <= number; i++){
        if (number % i === 0){
            myArr.push(i)
        }
    } return myArr
}

console.log(factors(10000))