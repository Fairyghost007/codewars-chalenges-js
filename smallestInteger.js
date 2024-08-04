function findSmallestInt(arr) {
    min=arr[0]
    for (i of arr){
      if(i<min){
        min=i
      }
    }
    return min
}

console.log(findSmallestInt([34, 15, 88, 2]))