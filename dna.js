function dnaStrand(dna){
    dna2=""
    for (i in dna){
      if(dna[i]==='A'){
          dna2+='T'
      }else if(dna[i]==='T') {
          dna2+='A'
      }else if (dna[i]==='C'){
          dna2+='G'
      }else if (dna[i]==='G'){
          dna2+='C'
      }
  }
  return dna2
  }
  
  console.log(dnaStrand("ATTGC"))