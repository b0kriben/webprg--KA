function mineLocation(field){
  let tomb = [];
  
  for(let i=0; i<=field; i++)
  {
    for(let j=field; i<=1; j++)
      {
        tomb.push(i && j);
      }
  }
  
  return tomb;
}

/*function mineLocation(field){
    let tomb = [];
    
    for(i=0; i=field; i++)
    {
      if(tomb[i] == 1)
        {
          tomb[];
        }
    }
    
    return tomb[];
}*/