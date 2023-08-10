// [1,2,3,4,5,6,7,1,7,2,5,3] = total -12
// Count Largest sum of consecutive Digits
// num=4
// sum=>25

// consitions
// num > array -> error message
// 10 - 4 + 1 =>7

function findlargest(array,num){
    if(num > array){
        throw new Error("error is found")
    }else{
        let max=0;
        for(let i=0;i<array.length - num +1;i++){
            let tmp=0;
            for(let j=0;j<num;j++){
                console.log("i"+i+"j",j)
                tmp+=array[i];
            }
            if(tmp>max){
                max=tmp;
            }
            
        }
        return max;
    }
}
const v=findlargest([1,2,3,4,5,6,7,1,7,2,5,3],4)
console.log("result",v)
