'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let words = str.split(" ")
    return words.slice(-1)[0]
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let words = str.split(" ")
    return words[words.length - 1]
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let a = str.split(" ")
    if (a.indexOf("I") !== -1) {
        a.splice(a.indexOf("I"), 1, "We")
    }
    if (a.indexOf("am") !== -1) {
        a.splice(a.indexOf("am"), 1, "are")
    }
    if (a.indexOf("was") !== -1) {
        a.splice(a.indexOf("was"), 1, "were")
    }

    return a.join(" ")


}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let result = []
    arr.map((el, i) => {
        if ((i + 1) % 5 == 0) {
            result.push(el + ",")
        }
        else {
            result.push(el)

        }
    })
    return result.join(" ")
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1" 
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------


const letterCounter = (str)=>{
    let letters = str.split("")
    let frequences={}
    let freq= 1
    return letters.reduce((init, letter, i)=>{
    console.log(frequences,"frequences")
    console.log(letter,"letter")
    console.log(init,"init")
    console.log(i,"i")
    if(letter === " "){
    return init + " " 
    
    }
    else if(letters[i] === letters[i+1] ){
    console.log("11")
    
    frequences[letter] = frequences[letter] + 1 ||  1
    return init + "" 
    }
    else if(letters[i] !== letters[i+1] ){
    
    frequences[letter] = frequences[letter] + 1 ||  1
    let num = frequences[letter]
    frequences[letter] =0 
    
    console.log(num,"22")
    
    return init + letter+num
    }
     
      }, "")
        
    }


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };