function nbYear(p0, percent, aug, p) {
    px=p0
    i=0
    while(px<p){
        console.log(px)
        px=px*(1+ percent/100)+aug
        i++
    }
  return i
}


console.log(nbYear(1500, 5, 100, 5000))