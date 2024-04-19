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
    let ki = document.getElementById("kimenetKurzus")
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
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
    method: "GET"})
        .then(response => response.json())
        .then(json => {
            let li = `<tr><th>Name</th><th>Students</th></tr>`;
            json.forEach(course => {
                li += `<tr>
                    <td>${course.name} </td>
                    <td>${course.students}</td>        
                </tr>`;
            })
        document.getElementById("users").innerHTML = li;
        //.catch(error => console.log("Nincs a keresésnek megfelelő találat"))
    })
}

//hozzáadás
function pushKurzus(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
        method: "PUT",

        body: JSON.stringify({
            id: 1,
            name: "matek",
            students: [ id, nameStudents],
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}




//Diák
// lekérés
function searchDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
    method: "GET"
    })
        .then(response => response.json())
        .then(json => {
            let li = `<tr><th>Name</th></tr>`;
            json.forEach(student => {
                li += `<tr>
                    <td>${student.name} </td>       
                </tr>`;
            });
        document.getElementById("users").innerHTML = li;
    });
}

// adatok hozzáadása
function updateDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
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
    .then(json => console.log(json));
}

//hozzáadás
function pushDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
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
    .then(json => console.log(json));
}

// törlés
function deleteDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
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
