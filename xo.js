function XO(str) {
    newStr=str.split('')
    cptX=0
    cptY=0
    for(i in newStr){
      if (['x','X'].includes(newStr[i])){
        cptX++
      }else if(['o','O'].includes(newStr[i])){
        cptY++
      }
    }
    return cptY===cptX
}

console.log("xoxoxoaaOxKzZzxX")