function disemvowel(str) {
    vowels=['a','e','i','o','u','A','E','I','O','U']
    words=str.split(' ')
    for (i in words){
        word=words[i].split('')
        for (j in word){
            if (vowels.includes(word[j])){
              //   console.log(word[i])
                  word[j]=''
                  console.log(word)
              }
              
        }
         words[i]=word.join('')
       
        
      //   console.log(str)
    }
    
    return words.join(' ')
    
  }
  console.log(disemvowel("This website is for losers LOL!"));