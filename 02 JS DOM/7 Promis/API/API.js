function search(params) {
  cityName = document.getElementById("id").value
  fetch('https://hur.webmania.cc/zips/'+ cityName+'.json')
  .then(response => response.json())
  .then(zips => {
    console.log(zips);
    kiiras(zips)
  })
  .catch(error => {
  document.getElementById("kimenet").innerHTML="Nincs a keresésnek megfelelő találat"  
  });
}

function kiiras(zips) {
  let ki = document.getElementById("kimenet")
  ki.innerHTML = "";
  let city = []
  for (let i = 0; i < zips.zips.length; i++) {
      if (city.includes(zips.zips[i].name)) {
          continue
      }
      ki.innerHTML+=zips.zips[i].zip + ": "
      ki.innerHTML += zips.zips[i].name + "\n<br>"
      varosok.push(zips.zips[i].name)  
  }

  document.getElementById("lab").style.display="none";
  ki.style.height = "max-content"
  ki.style.width = "max-content"
}