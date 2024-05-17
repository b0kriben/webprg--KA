function diff(a, b){
    const sortA =  a.filter(sum => !b.includes(sum));
    const sortB=  b.filter(sum => !a.includes(sum));
    return [...new Set(sortA.concat(sortB).sort())];
  }