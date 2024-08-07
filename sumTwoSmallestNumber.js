function sumTwoSmallestNumbers(numbers) {  
    min1=Math.min(...numbers)
    min2=Math.min(...numbers.filter(x=>x!==min1))
    return min1+min2
  }
  
  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))