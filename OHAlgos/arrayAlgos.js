// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


// Write function breaking records that takes in one array of scores Maria made throughout the season 
// create 2 vars for min score and max score 
// create count var which will be an array of 2 nums 
// write a loop to itterate over scores array
// if statement checking if the current score is > max score or < min score 
// if the score is higher than max, increase max count same for min count 
// also change max score and min score accordingly 
// return count 

function breakingRecords(scores){
    let minScore = scores[0]
    let maxScore = scores[0]
    let count = [0,0]
    for (let i = 1; i < scores.length; i++){
        if(scores[i] < minScore){
            count[1]++
            minScore = scores[i]
        }
        else if (scores[i] > maxScore){
            count[0]++
            maxScore = scores[i]
        }
    }
    return count
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))




// Given a list of 'weak passwords' and a password (string) determine if the password is strong or weak 
// if the password is in the list of weak passwords return 'Weak password'
// if the password is not found in the list of weak passwords return 'Strong password'
// let password2 = 'passwords'
// console.log(password === password2)


// write a function that takes in 2 parameters (weakpasswordlist, password)
// loop through the array of weakpasswords
// compare the password to each value in the array 
// if the password is found in the array return 'Weak password'
// otherwise return 'Strong password'

let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let pass = 'asdf#$$GEG'
const strongOrWeakPassword = (weakPasswordList, password) => {
    for(let idx = 0; idx < weakPasswordList.length; idx++){
        // console.log('TYPE OF PASSWORD', typeof(password))
        // console.log('TYPE OF PASSWORD IN LIST',typeof(weakPasswordList[idx]))
        if(password == weakPasswordList[idx]){
            // console.log('Weak password')
            return 'Weak password'
        }
    }
    return 'Strong Password'
}
console.log(strongOrWeakPassword(weakPass,pass))


// Reverse an array 
// example reverseArr([1,2,3,4]) would return [4,3,2,1]

// initially the result arr would be empty = []
// first itteration [4]
// second itteration [4,3]
// third itteration [4,3,2]
// fourth itteration [4,3,2,1]


let result = [1,2,3,4,5,6,7,8,9,10]
console.log(result.length)
result.push(4)

console.log(result)

result.pop()

console.log(result)
// Write a function that takes in an arr assume the values will all be numbers
// loop through the array from the end
// push the value into result 
const reverseArr = (arr) => {
    let result = []
    for(let idx = arr.length-1; idx >= 0; idx--){
        result.push(arr[idx])
    }
    return result
}
console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]))

const reverseArrInPlace = (arr) => {
    for (let idx = 0; idx < arr.length/2; idx++){
        let pointer2 = arr.length-1-idx
        let temp = arr[idx]
        arr[idx] = arr[pointer2]
        arr[pointer2] = temp
    }
    return arr
}

console.log(reverseArrInPlace([1,2,3,4]));




<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
import 'bootstrap/dist/css/bootstrap.min.css'
// npm install bootstrap@v5.2.3