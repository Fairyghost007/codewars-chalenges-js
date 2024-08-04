function filter_list(l) {
    newL=[]
    for (i of l){
      if(typeof(i)==='number'){
        newL.push(i)
      }
    }
    return newL
}

console.log(filter_list([1,2,'a','b']))