function accum(s) {
    str=s.split('')
      for (i=0 ;i<str.length; i++){
          str[i] = str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    }
    
    return str.join('-')
  }

  console.log(accum("abcd"))