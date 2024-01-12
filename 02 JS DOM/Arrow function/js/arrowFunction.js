var input = [];

function megFordit(){

    /*let ki = "";
    for(let i in input)
    {
        ki +=input[i];
    }
    document.getElementById("kimenet").innerHTML = ki;*/

    

    input.push(document.getElementById("input").value);
    document.getElementById("kimenet").innerHTML = input[0];
}

/*function kiiras(){

    let ki = "";
    for(let i in input)
    {
        ki +=input[i];
    }
    document.getElementById("kimenet").innerHTML = ki;
}*/