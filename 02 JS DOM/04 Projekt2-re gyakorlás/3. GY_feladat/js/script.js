const person1 = {fname:"Anna : ", penz:2100}
const person2 = {fname:"Cecil : ", penz:1890}
const person3 = {fname:"Emil : ", penz:2050}
const person4 = { fname:"Gerald : ", penz:2920}

let text1 = "";
for (let x in person1) {
  text1 += person1[x];
}
let text2 = "";
for (let x in person2) {
  text2 += person2[x];
}
let text3 = "";
for (let x in person3) {
  text3 += person3[x];
}
let text4 = "";
for (let x in person4) {
  text4 += person4[x];
}

document.getElementById("kereset").innerHTML = text1;
document.getElementById("kereset").innerHTML = text2;
document.getElementById("kereset").innerHTML = text3;
document.getElementById("kereset").innerHTML = text4;


/*let fizetes = { 
    Anna : 2100, 
    Cecil : 1890, 
    Emil : 2050, 
    Gerald : 2920 
}

const penz= {};

document.getElementById("kereset").innerHTML = Anna.fizetes;*/

/*let fizetes = {
Anna : 2100,
Cecil : 1890,
Emil : 2050,
Gerald : 2920
}

Ítj programot, mely összegzi a fizetéseket!
A konzolba kiírja, hogy ki mennyit keres és az össz keresetet.

Szorgalmi:
A kiíratást a weboldalon történjen meg.*/