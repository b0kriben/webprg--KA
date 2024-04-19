const url = "https://vvri.pythonanywhere.com/api/courses&quot"

fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data)
                data.forEach(element => {
                    console.log(element)
            })
        })
        .catch(error => console.log("Hiba történt: " + error))

// Kurzus
// lekérés
searchKurzus("https://vvri.pythonanywhere.com/api/courses&quot" {
method: "GET"
})
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Name</th><th>Students</th></tr>`;
        json.forEach(course => {
            li += `<tr>
                <td>${course.name} </td>
                <td>${course.students}</td>        
            </tr>`;
        });
    document.getElementById("users").innerHTML = li;
});



//hozzáadás
pushKurzus("https://vvri.pythonanywhere.com/api/courses&quot" {
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





//Diák
// lekérés
searchDiák("https://vvri.pythonanywhere.com/api/courses&quot" {
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


// adatok hozzáadása
updateDiák("https://vvri.pythonanywhere.com/api/courses&quot" {
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



//hozzáadás
pushDiák("https://vvri.pythonanywhere.com/api/courses&quot" {
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



// törlés
deleteDiák("https://vvri.pythonanywhere.com/api/courses&quot" {
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
