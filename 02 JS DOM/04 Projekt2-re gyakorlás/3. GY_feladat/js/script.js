let fname1 = "Anna";
let penz1 = 2100;
let fname2 = "Cecil";
let penz2 = 1890;
let fname3 = "Emil";
let penz3 = 2050;
let fname4 = "Gerald";
let penz4 = 2920;

const fizetes = {
  fname1:"Anna", penz1:2100, 
  fname2:"Cecil", penz2:1890, 
  fname3:"Emil", penz3:2050, 
  fname4:"Gerald", penz4:2920
}

document.getElementById("kereset").innerHTML = fizetes.fname1+" : "+fizetes.penz1+"<br>"+ fizetes.fname2+" : "+fizetes.penz2+"<br>"+ fizetes.fname3+" : "+fizetes.penz3+"<br>"+ fizetes.fname4+" : "+fizetes.penz4;




/*const person1 = {fname:"Anna : ", penz:2100}
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
document.getElementById("kereset").innerHTML = text4;*/



/*let text = "";
for (let x in person) {
  text += person[x];
}

document.getElementById("kereset").innerHTML = fizetes.Anna;*/

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