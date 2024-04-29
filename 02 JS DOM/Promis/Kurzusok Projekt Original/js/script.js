/*function searchKurzus(params) {
    courseName = document.getElementById("id").value
    fetch('https://vvri.pythonanywhere.com/api/courses&quot'+ courseName+'.json')
    .then(response => response.json())
    .then(zips => {
      console.log(zips);
      kiirasKurzus(zips)
    })
    .catch(error => {
    document.getElementById("kimenetKurzus").innerHTML="Nincs a keresésnek megfelelő találat"  
    });
  }
  
  function kiirasKurzus(zips) {
    let ki = document.getElementById("kimenetKurzus")
    ki.innerHTML = "";
    let course = []
    for (let i = 0; i < zips.zips.length; i++) {
        if (course.includes(zips.zips[i].name)) {
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

//Diak
  function searchDiak(params) {
    studentName = document.getElementById("id").value
    fetch('https://vvri.pythonanywhere.com/api/courses&quot'+ studentName+'.json')
    .then(response => response.json())
    .then(zips => {
      console.log(zips);
      kiirasDiak(zips)
    })
    .catch(error => {
    document.getElementById("kimenetDiak").innerHTML="Nincs a keresésnek megfelelő találat"  
    });
  }
  
  function kiirasDiak(zips) {
    let ki = document.getElementById("kimenetDiak")
    ki.innerHTML = "";
    let student = []
    for (let i = 0; i < zips.zips.length; i++) {
        if (student.includes(zips.zips[i].name)) {
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
*/



// Kurzus
// lekérés
function searchKurzus(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
    method: "GET"})

        .then(response => response.json())
        .then(course => {
            let li = `<tr><th>Id</th><th>Name</th><th>Students</th></tr><br>`;

                li += `<tr>
                    <td>kurzus azonosító: ${course.id}</td><br>
                    <td>kurzus név: ${course.name}</td><br><br>
                    </tr>`;
                course.students.forEach(student => {
                    li+=`<tr>
                        <td>${student.id}</td><br>
                        <td>${student.name}</td><br><br>
                        </tr>`;
                })
                 document.getElementById("kimenetKurzus").innerHTML += li;
            })
        .catch(error => console.log("Nincs a keresésnek megfelelő találat"+error))
        // document.getElementById("users").innerHTML = li;
    }

//hozzáadás
function pushKurzus(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot", {
        method: "PUT",

        body: JSON.stringify({
            id: 1,
            name: "matek",
            students: [ id, student.name /*nameStudents*/],
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Nem sikerült jozzáadni az adatot"))
}

// kiiras
function kiirasKurzus(json) {
    let ki = document.getElementById("kimenetKurzus")
    ki.innerHTML = "";
    let course = []
    for (let i = 0; i < json.json.length; i++) {
        if (course.includes(json.json[i].name)) {
            continue
        }
        ki.innerHTML+= json.json[i].json + ": "
        ki.innerHTML += json.json[i].name + "\n<br>"
        kurzusok.push(json.json[i].name)  
    }
    document.getElementById("lab").style.display="none";
    ki.style.height = "max-content"
    ki.style.width = "max-content"
  }


//Diák
// lekérés
function searchDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot", {
    method: "GET"
    })
        .then(response => response.json())
        .then(json => {
            let li = `<tr><th>Name</th></tr>`;
            json.forEach(student => {
                li += `<tr>
                    <td>${student.id}</td>
                    <td>${student.name} </td>       
                </tr>`;
            })
        .catch(error => console.log("Nincs a keresésnek megfelelő találat"))
        document.getElementById("users").innerHTML = li;
    })
}

// adatok hozzáadása
function updateDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot", {
    method: "PATCH",

    body: JSON.stringify({
    title: "foo",
    body: "bar"
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Nem sikerült változtatni az adaton"))
}

//hozzáadás
function pushDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            name: "Arany János",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Nem sikerült hozzáadniaz adatot"))
}

// törlés
function deleteDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot", {
        method: "DELETE",

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(json => console.log(json))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}

// kiiras
function kiirasDiak(json) {
    let ki = document.getElementById("kimenetDiak")
    ki.innerHTML = "";
    let student = []
    for (let i = 0; i < json.json.length; i++) {
        if (student.includes(json.json[i].name)) {
            continue
        }
        ki.innerHTML+=json.json[i].json + ": "
        ki.innerHTML += json.json[i].name + "\n<br>"
        tanulok.push(json.json[i].name)  
    }
  
    document.getElementById("lab").style.display="none";
    ki.style.height = "max-content"
    ki.style.width = "max-content"
  }
