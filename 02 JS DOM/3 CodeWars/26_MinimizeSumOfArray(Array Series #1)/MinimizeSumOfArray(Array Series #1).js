function minSum(arr) {
    var num=0;
    arr = arr.sort((a,b)=>a-b);
    
    while(arr.length)
    {
      num += arr.pop()*arr.shift();
    }
    
    return num;
}