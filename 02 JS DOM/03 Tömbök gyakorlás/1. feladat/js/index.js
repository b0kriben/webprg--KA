var tomb = [1, 2, 3];

function elsoElem(){
    document.getElementById("kimenet").innerHTML = tomb[0];
}

function masodikElem(){
    document.getElementById("kimenet").innerHTML = tomb[1];
}

function harmadikElem(){
    document.getElementById("kimenet").innerHTML = tomb[2];
}

function kiiras(){
    let ki = "";
    for(let i in tomb)
    {
        ki +=tomb[i];
    }
    document.getElementById("kimenet").innerHTML = ki;
}

function osszesElem(){
    document.getElementById("kimenet").innerHTML = tomb;
}

function hozzaRak(){
    tomb.push(document.getElementById("tomb").value);
    document.getElementById("kimenet").innerHTML = tomb;
}

function tombHossza(){
    document.getElementById("kimenet").innerHTML = tomb.length;
}

function torol(){
    let index = document.getElementById("index").value;
    let ujelem = document.getElementById("ujertek").value;

    tomb.splice(index, 1, ujelem);
}