// return masked string
function maskify(cc) {
    c=cc.split('')
    for(i=0;i<=c.length-5;i++){
      c[i]='#'
    }
    return c.join('')
  }