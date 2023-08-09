// #3 - DS & Algorithms Course | String Anagram Problem 
// 'hello' -> 'llleo'

// condition 1 is length check both string is equal or not .
// String Hello
// {h:0,e:0,l:0,:O:0}

function isAnagram(array1,array2){
if(array1.length!==array2.length){
    console.log("False")
return false;
}
let counter={}

for(let letter of array1){
    counter[letter]=(counter[letter] || 0) + 1;
    console.log(counter[letter])
    console.log(counter)
}
for(let item of array2){
    if(!counter[item]){
        return false
    }
    counter[item]-=1.
}
return true
}

const check = isAnagram('hello','llheo')
console.log(check)