function descendingOrder(n){
    return Number(n.toString().split('').map((x)=>Number(x)).sort((a,b)=>b-a).join(''))
  }
  
  console.log(descendingOrder(132))