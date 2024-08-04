function findShort(s){
    words=s.split(' ')
    min=words[0].length
    
    for( i in words){
      if(words[i].length<min){
        min=words[i].length
      }
    } 
    return min
}


console.log("Let's travel abroad shall we")