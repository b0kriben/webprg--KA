var input = [];

function megFordit(){

    input.push(document.getElementById("input").value);

    //csere
    for(let i in input)
    {
        let uj = input[0];
        input[0] = input[i];
        input[i] = uj;
    }

    /*let uj = input[0];
    input[0] = input[5];
    input[5] = uj;*/

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