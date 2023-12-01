//let colors = ["greenYellow", "red"]

document.getElementById("item").innerHTML = Math.floor(Math.random() * 6);

function changeColor(object) {
   
   object.style.backgroundColor = colors[object.dataset.color];
   object.dataset.color = parseInt(object.dataset.color)+1;
    if (object.dataset.color =="2") {
        object.dataset.color ="0";
    }


}