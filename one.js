// Checking sum zero - Problem 1
// no output know

function getSumofZero(array){
    for(let number of array){
        for(let j=1;j<array.length;j++){
            if(number + array[j] === 0){
                return [number,array[j]]
            }
        }
    }
}

const result=getSumofZero([-5,-4,-3,-2,-1,0,2,4,6,8])
console.log(result)
