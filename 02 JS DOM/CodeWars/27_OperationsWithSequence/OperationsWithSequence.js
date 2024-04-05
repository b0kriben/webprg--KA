var calc = function(a) {
    return a.reduce((a,b,i)=>{
      b = b>0? b**2 : b
      b = (i+1)%3==0? b*3 : b
      b = (i+1)%5==0? -b:b
      return a+b
    },0);
  }