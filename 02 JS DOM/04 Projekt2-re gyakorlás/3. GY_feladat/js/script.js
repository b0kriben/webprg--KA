let fizetes = {
  Anna : 2100,
  Cecil : 1890,
  Emil : 2050,
  Gerald : 2920
  }

let ki = "";

function osszeg(parameter) 
{
  let osszead = 0

  for (let i = 0; i < Object.keys(parameter).length; i++) 
  {
    osszead += Object.values(parameter)[i];
    ki += (Object.keys(parameter)[i] + ": ");
    ki += (Object.values(parameter)[i]);
    ki += "<br>";
  }

  ki += "Össz: " + osszead;

  return ki;
}

ki = osszeg(fizetes);
document.getElementById("container").innerHTML = ki;

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