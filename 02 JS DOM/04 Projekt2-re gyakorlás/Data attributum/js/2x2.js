let colors = ["red", "blue", "Yellow"]

function changeColor(object) {
   
   object.style.backgroundColor = colors[object.dataset.color];
   object.dataset.color = parseInt(object.dataset.color)+1;
    if (object.dataset.color =="3") {
        object.dataset.color ="0";
    }
}