function findNextSquare(sq) {
    if(Math.floor((sq**0.5)) **2===sq ){
      for (i=sq+1;i<=2*sq;i++){
        if(Math.floor((i**0.5)) **2===i ){
          return i
        }
      }
    }
     return -1;
   }
   
   console.log(findNextSquare(121) )