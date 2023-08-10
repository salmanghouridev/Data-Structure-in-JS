// Count Unique Member
// [1,2,3,5,4,5,5,2,3,5,6,7,8,1,3,4]
// output->
// i=0,j=1
// array[i]!==array[j]
// 1.i++
// array[i]=array[j]


// function Uniquenumber(array){
//     if(array.length>0){
//         let i=0;
//         for(let j=1;j<array.length;j++){
//             if(array[i]!==array[j]){
//                 i++;
//                 array[i]=array[j]
//             }
//         }
//         return i+1;
//     }
//     else{
//        throw new Error("Array is empty")
//     }
// }
// const a= Uniquenumber([1,2,3,5,4,5,5,2,3,5,6,7,8,1,3,4]);
// console.log(a);

function findUniqueNumbers(array) {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }

    // Use a Set to efficiently store unique numbers
    const uniqueNumbersSet = new Set();
    
    // Iterate through the input array
    for (const number of array) {
        uniqueNumbersSet.add(number);
    }

    // Convert the Set back to an array
    const uniqueNumbersArray = Array.from(uniqueNumbersSet);

    return uniqueNumbersArray;
}

const inputArray = [1, 2, 3, 5, 4, 5, 5, 2, 3, 5, 6, 7, 8, 1, 3, 4];
const uniqueNumbers = findUniqueNumbers(inputArray);
console.log("Unique numbers:", uniqueNumbers);
