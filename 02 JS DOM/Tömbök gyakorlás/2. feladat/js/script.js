/*var e = document.getElementById("elements");
var ki;*/
var tomb = [];

function getInputValue(){
    tomb.push(document.getElementById("text").value);
    document.getElementById("elements").innerHTML = tomb; 

    tomb.push(document.getElementById("text").value);
    document.getElementById("elements").innerHTML = tomb; 

    /*e.innerHTML = ki;
    e.style.border = "2px solib black";
    e.style.backgroundColor = "grey";
    e.stylefontWeight = "bolder";
    e.style.fontFamily = 'Courier New', "Courier", "monospace";
    e.style.width = "100px";
    e.style.height = "75px";
    e.style.padding = "5px";
    e.style.flex = "1";
    e.style.padding = "5px";

    document.getElementById("elements").style.display = "none";*/
}