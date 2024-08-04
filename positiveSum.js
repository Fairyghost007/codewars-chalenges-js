function positiveSum(arr) {
    sum=0
    for(i of arr ){
      if (i>0){
        sum+=i
      }
    }
    return sum
}

function positiveSum(arr) {
    return arr.reduce((sum,c)=>{
        if(c>0){
           return  sum+c
        }
        return sum
    },0)
}

console.log(positiveSum([1,-4,7,12]))