function squareDigits(num){
    str=num.toString().split('')
    newStr=[]
    for (i in str){
       newStr+=Number(str[i])**2
    }
    return Number(newStr)
}

console.log(squareDigits(312))