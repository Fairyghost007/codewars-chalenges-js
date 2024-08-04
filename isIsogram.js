function isIsogram(str){
    str2=str.toLowerCase()
    for (i=0;i<=str2.length;i++){
      c=str2[i]
      cpt=0
      for (j=0;j<=str2.length;j++){
        if(str2[j]===c){
          cpt++
        } 
      }
      if(cpt>1){
          return false
      }
    }
    return true
}
  
console.log(isIsogram("birane"))