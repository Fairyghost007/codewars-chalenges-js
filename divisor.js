function divisors(integer) {
    let divs=[]
    for (let i=2;i<=Math.floor(integer/2);i++){
      if(integer%i===0){
        divs.push(i)
      }
    }
    return divs.length===0?`${integer} is prime`:divs
  }