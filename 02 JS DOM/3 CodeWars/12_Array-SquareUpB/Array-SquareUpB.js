function squareUp(n) {

    let tomb = [];
  
    for (let i = 1; i <= n; i++)
      for (let j = n; j >= 1; j--)
        tomb.push(j <= i ? j : 0);
  
    return tomb;
        
  }