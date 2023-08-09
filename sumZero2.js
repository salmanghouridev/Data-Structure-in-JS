// #2 - DS & Algorithms Course | Sum Zero Problem - Optimized Solution
// Checking sum zero - Problem 1 [-5,-4,-3,-2,-1,0,2,4,6,8]
// no output know 

function Findzero(array){
    let left=0;
    let right=array.length-1;

    while(left<right){
        console.log("loop")
        sum=array[left]+array[right];
        if(sum===0){
            console.log("we find 0 ")
            return [array[left],array[right]]
        }
        else if(sum > 0){
            console.log("loop -1 apply")
            right--;
        }
        else{
            console.log("loop +1 apply")
            left++;
        }
    }
}
console.log(Findzero([-5,-4,-3,-2,-1,0,2,4,6,8]))


// Linear Time Complexity o(n)
