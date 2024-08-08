function isTriangle(a,b,c)
{
  if (a===0 || b===0 || c ===0){
    return false;
  }
  return a+b>c && a+c>b && b+c>a ? true: false
   
}

console.log(isTriangle(1,2,3))