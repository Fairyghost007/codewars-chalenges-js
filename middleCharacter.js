function getMiddle(s)
{
  taille=s.length
  console.log(taille/2)
  newS=""
  if(taille%2===0){
      newS+=s[taille/2 -1]
        newS+=s[taille/2]
    
  }else{
      newS+=s[Math.floor(taille/2)]
  }
  return newS
}



console.log(getMiddle("biran"))
console.log(getMiddle("birane"))