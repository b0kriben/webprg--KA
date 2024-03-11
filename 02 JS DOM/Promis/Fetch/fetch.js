function search(params) {
  id = document.getElementById("id").value
  fetch('https://jsonplaceholder.org/users/?id='+id)
  .then(response => response.json())
  .then(user => {
    console.log(user);
    kiiras(user)
  })
  .catch(error => {
  document.getElementById("kimenet").innerHTML="Nem a megfelelő intervallumban adta meg a számot! (1 - 30)" 
  });
}



function kiiras(user) {
  let ki = document.getElementById("kimenet")
  ki.innerHTML = "";
  ki.innerHTML+=("<div>id: " + user.id +"\n</div>")
  setTimeout(() => {
    ki.innerHTML+=("<div>Teljes név: " + user.firstname + " " + user.lastname +"\n</div>")
  setTimeout(() => {
    ki.innerHTML+=("<div>tel. szám: " + user.phone +"\n</div>")
    setTimeout(() => {
  ki.innerHTML+=("<div>email: " + user.email +"\n</div>")
    setTimeout(() => {
  ki.innerHTML+=("<div>geolokációs adatok: " + user.address.geo.lat + " " + user.address.geo.lng +"\n</div>")
      setTimeout(() => {
  ki.innerHTML+=("<div>weboldal: " + user.website +"\n</div>")
        setTimeout(() => {
  ki.innerHTML+=("<div>cégnév: " + user.company.name +"\n</div>")
          }, 50);
        }, 50);
      }, 50);
    }, 50);
  }, 50);
  }, 50);

  document.getElementById("h1").style.display="none";
  console.log(ki)
  ki.style.height = "max-content"
  ki.style.width = "max-content"
}