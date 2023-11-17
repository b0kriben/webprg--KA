let tomb = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

function kiiras(){
    document.getElementById("tomb").innerHTML = tomb;
}

function veletlenSzamGeneralasa(){
    Math.random(0, 6) = tomb[i];
    
    //let index = document.getElementById("index").value;
    //tomb.splice(index, 1);

    document.getElementById("veletlenSzam").innerHTML = tomb[i];
}

function legyenVeletlenSorrend(tomb){
    let ujTomb = [];

    //ujTomb = array.push(ujElem)

    document.getElementById("ujTomb").innerHTML = ujTomb;

    return ujTomb;
}

    

/*
Feladat:
Az alábbi lépéseknek megfelelően hozd létre a veletlenSorrend JavaScript programot. 
A programban legyen a  legyenVeletlenSorrend() függvényt, mely egy tetszőleges hosszúságú tömböt kap paraméterül. 
A tömb elemeiből készít egy véletlen sorrendű új tömböt, melyet visszaad visszatérési értékül.


1. Készíts egy hét elemű tömbot! 
Például: "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"
2. Generálj egy egész számot 0 és 6 között. 
Legyen ez 2.
3. A második indexű elemet elhelyezed egy új tömbben.
Az új tömbbe kerül a "szerda" és az eredeti tömbből törlődik.
4. Generálj egy egész számot 0 éf 5 között. 
Legyen ez 5.
5. Az ötödik indexű elemet beletesszük az új tömbbe 
Új tömb: ["szerda", "vasárnap"] és az eredetiből töröljük.
6. Generálj egy egész számot 0 éf 4 között. 
Legyen ez 1.
7. Az első indexű elemet beletesszük az új tömbbe.
Új tömb: ["szerda", "vasárnap", "kedd"] és az eredetiből töröljük.
8. Generálj egy egész számot 0 éf 3 között. 
Legyen ez 0.
9. A nulladik indexű elemet beletesszük az új tömbbe.
Új tömb: ["szerda", "vasárnap", "kedd", "hétfő"] és az eredetiből töröljük.
10. Generálj egy egész számot 0 éf 2 között. 
Legyen ez 2.
11. A második indexű elemet beletesszük az új tömbbe.
Új tömb: ["szerda", "vasárnap", "kedd", "hétfő", "szombat"] és az eredetiből töröljük.
12. Generálj egy egész számot 0 éf 1 között. 
Legyen ez 0.
13. A nulladik indexű elemet beletesszük az új tömbbe.
Új tömb: ["szerda", "vasárnap", "kedd", "hétfő", "szombat", "csütörtök"] és az eredetiből töröljük.
14. Az eredeti tömb utoldó elemét hozzáfűzzük az új tömbhöz.
Az új tömb: ["szerda", "vasárnap", "kedd", "hétfő", "szombat", "csütörtök", "péntek"]*/

/*Tipp:
Új elem hozzáadása a tömb végéhez: 
array.push(ujElem)

Index alapján elem törlése a tömbből:
array.splice(index, 1)

Véletlenszám generálás: Math.random() - 0 és 1 közötti tizedes számot generál
Tizedes kerekítése: Math.floor()


function  legyenVeletlenSorrend(tomb) {
    let ujTomb = [];
    // ...

    return ujTomb;
}

Teszteld a függvényt!
console.log(

legyenVeletlenSorrend(["h", "k", "sze", "cs", "p", "szo", "v"]))
console.log(

legyenVeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]))*/