let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan", kep:'<img id="image" src="ahsoka_tano.jpeg">'},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász", kep:'<img id="image" src="boba_fett.jpg">'},
    {firstName: "Han", lastName: "Solo", job: "csempész", kep:'<img id="image" src="han_solo.jpg">'},
    {firstName: "Leia", lastName: "Organa", job: "szenátor", kep:'<img id="image" src="leia_organa.jpg">'} ]

function kiiras(parameter) {
    let ki = "";

    ki +=`<div id="container">`

    for (let i = 0; i < parameter.length; i++) {
        
        ki +=`<div id="card">`;
        for (let j = 0; j < Object.values(parameter[i]).length; j++) {
            ki +=`<div> ${Object.values(parameter[i])[j]} </div>`;      
        }
        ki +=`</div>`;
    }

    ki +=`</div>`
    document.getElementById("container").innerHTML = ki;
}

heroes.push({firstName: "Darth",lastName:"Vader",job:"sithnagyúr", kep:'<img id="image" src="darth_vader.jpg">'});
heroes.push({firstName: "Luke",lastName:"Skywalker",job:"jedilovag", kep:'<img id="image" src="luke_skywalker.jpg">'});
kiiras(heroes)

/*let heroes = [
{firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
{firstName: "Boba", lastName: "Fett", job: "fejvadász"},
{firstName: "Han", lastName: "Solo", job: "csempész"},
{firstName: "Leia", lastName: "Organa", job: "szenátor"} ]

1.
Készíts egy weboldalt, melyen a heroes tömböt jeleníted meg.
A kiírást szervezd függvénybe (rendereld) és használd hozzá a Template literal-t.

2.
Egészítsd ki a heroes tömböt újabb szereplőkkel és ellenőrizd a weboldaladon, hogy megjeleníti-e az új szereplőket.

3.
Adj hozzá dizájnt.
Pl. a hősök jelenjenek meg kártyákon.

Szorgalmi:
Készíts egy újabb függvényt, mely a hősöket táblázatban jeleníti meg.

Tipp:
A magyab billentyűzeten a Backtick (back quote - fordított aposztróf) az AltGr + 7 billentyűkombinációval érhető el.*/