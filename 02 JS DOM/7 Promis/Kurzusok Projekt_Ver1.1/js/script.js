// Kurzus
// lekérés
function searchKurzus(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
    method: "GET"})

        .then(response => response.json())
        .then(course => {
            let li = `<tr><th>Id</th>-<th>Name</th>-<th>Students</th></tr><br>`;

                li += `<tr>
                    <td>kurzus azonosító: ${course.id}</td><br>
                    <td>kurzus név: ${course.name}</td><br><br>
                    </tr>`;
                course.students.forEach(student => {
                    li+=`<tr>
                        <td>Id-je: ${student.id}</td><br>
                        <td>Neve: ${student.name}</td><br><br>
                        </tr>`;
                })
                 document.getElementById("kimenetKurzus").innerHTML += li;
            })
        .catch(error => console.log("Nincs a keresésnek megfelelő találat"+error))
        // document.getElementById("users").innerHTML = li;
    }

//hozzáadás
function pushKurzus(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
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
    .catch(error => console.log("Nem sikerült jozzáadni az adatot"+error))
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
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
    method: "GET"
    })
        .then(response => response.json())
        .then(student => {
            let li = `<tr><th>Name</th></tr>`;
            student.forEach(student => {
                li += `<tr>
                    <td>Id-ja: ${student.id}</td>
                    <td>Neve: ${student.name} </td>       
                </tr>`;
            })
        .catch(error => console.log("Nincs a keresésnek megfelelő találat"+error))
        // document.getElementById("kimenetKurzus").innerHTML = li;
    })
}

// adatok hozzáadása
function updateDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
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
    .catch(error => console.log("Nem sikerült változtatni az adaton"+error))
}

//hozzáadás
function pushDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
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
    .catch(error => console.log("Nem sikerült hozzáadniaz adatot"+error))
}

// törlés
function deleteDiak(params){
    fetch("https://vvri.pythonanywhere.com/api/courses/" + 1, {
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
function kiirasKurzus(json) {
    let ki = document.getElementById("kimenetKurzus")
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