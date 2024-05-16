// input: names - unsorted strings
// output: case-agnostic sort
/*sortme = function( names ){
  
  
    return names;
}*/  

sortme = function(names){

    let tomb=[];

    if(tomb[0]/2 == 1)
    {
        names == tomb[0];
        tomb[0] == tomb[1];
        tomb[1] == names;
    }
    
    return names;
}