function highAndLow(numbers){
    num=numbers.split(' ')
    max=Number(num[0])
    min=Number(num[0])
  for (i in num){
      if (Number(num[i])>max){
          max=Number(num[i])
      }else if(Number(num[i])<min) {
          min=Number(num[i])
      }
  }

  return `${max} ${min}`
  
}


console.log(highAndLow("1 9 3 4 -5"))