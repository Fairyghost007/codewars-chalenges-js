
function getCount(str) {
    cpt=0
    vowels=['a','e','i','o','u']
    for (i in str){
      if (vowels.includes(str[i])){
        cpt++
      }
    }
    return cpt;
}

console.log(getCount("birane ndiaye"))