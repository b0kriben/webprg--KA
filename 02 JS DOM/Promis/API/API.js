fetch('https://hur.webmania.cc/zips/Békés.json/?zip=1 ')
  .then(response => {
    if (!response.ok) {
      throw new Error('Nincs a keresésnek megfelelő találat.');
    }
    document.getElementById("zip1").innerHTML;
    return response.json();
  })
  .then(city => {
    console.log(city);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function cityForm() {
  let tomb = document.getElementById("kimenet").value;

  for(let i=0; i<=9999; i++)
  {
    tomb.push(i);
  }
  return tomb;
    /*let tomb = document.forms["cityForm"].value;
    if (tomb == "") {
      alert("Üres a tömb.");
      return false;
    }*/
    console.log(city);
}