// * Warmup
// loop through a string and console.log every character in the string 

const loopThroughString = (str) => {
    for (let index = 0; index < str.length; index++) {
        console.log(str[index])
    }
}
loopThroughString('racecar')


// Given a string, return true if the string is a palindrome, and false otherwise.
// Palindrome means the word is the same read backwards example mom, dad, racecar, kayak are all palindrome but racecars, fast, hug are examples that are not palindrome


let str = 'kayak'
let pointer = 0

const palindromev1 = (arrString) => {
    for (let i = arrString.length-1; i >= 0; i--){
        // console.log(arrString[i])
        if(arrString[i] === arrString[pointer]){
            pointer++
            // console.log('MATCH')
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindromev1(str))


const palindromev2 = (arrString) => {
    for (let i = arrString.length-1; i >= 0; i--){
        // console.log(arrString[i])
        if(arrString[i] === arrString[pointer]){
            if(i === pointer){
                return true
            }else{
                pointer++
            }
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindromev2(str))
