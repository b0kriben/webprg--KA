var tomb = document.querySelectorAll("#item");
console.log(tomb);
var db = 0;

for(elem of tomb)
{
    elem.innerHTML = Math.floor(Math.random() * 6) + 1; 
    if(elem == elem)
    {
        ++db;

        if(db > 2)
        {
            elem.innerHTML = Math.floor(Math.random() * 6) + 1; 
        }
    }
}

let colors = ["greenYellow", "red"]

function changeColor(object) {
   
   object.style.backgroundColor = colors[object.dataset.color];
   object.dataset.color = parseInt(object.dataset.color)+1;
    if (object.dataset.color =="2") {
        object.dataset.color ="0";
    }

    /*if(object.dataset.color == "greenYellow" && "#item" == "#item")
    {
        object.hide("#item");
    }*/
}

function cardPar()
{
    if(object.dataset.color == "greenYellow" && elem == elem)
    {
        document.getElementById('#item').style.color='rgb(0, 59, 0)';
        document.getElementById('#item').style.backgroundColor='rgb(0, 59, 0)';
        //object.hide("#item"); //display.none
    }
}

/*const myTimeout = setTimeout(memoriaContainer, 2000);*/