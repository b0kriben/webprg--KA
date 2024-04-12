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
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
method: "GET"
})
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Name</th><th>Students</th></tr>`;
        json.forEach(course => {
            li += `<tr>
                <td>${course.name} </td>
                <td>${course.email}</td>        
            </tr>`;
        });
    document.getElementById("courses").innerHTML = li;
});



//hozzáadás
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
     
    // Metódus hozzáadása
    method: "PUT",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));



// törlés
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
     
    // Metódus  hozzáadása
    method: "DELETE",
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => {
    // Ha a válasz státusza OK, akkor visszatérünk egy üres JSON objektummal
    if (response.ok) {
        return response.json();
    }
    // Ha a válasz státusza nem OK, akkor dobunk egy hibát
    throw new Error('Network response was not ok.');
})
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json))
// Hibakezelés
.catch(error => console.error('There was a problem with the fetch operation:', error));





//Diák
// lekérés
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
method: "GET"
})
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Name</th></tr>`;
        json.forEach(student => {
            li += `<tr>
                <td>${student.name} </td>
                <td>${student.email}</td>        
            </tr>`;
        });
    document.getElementById("students").innerHTML = li;
});



//hozzáadás
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
     
    // Metódus hozzáadása
    method: "PUT",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));



// törlés
fetch("https://vvri.pythonanywhere.com/api/courses&quot" {
     
    // Metódus  hozzáadása
    method: "DELETE",
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => {
    // Ha a válasz státusza OK, akkor visszatérünk egy üres JSON objektummal
    if (response.ok) {
        return response.json();
    }
    // Ha a válasz státusza nem OK, akkor dobunk egy hibát
    throw new Error('Network response was not ok.');
})
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json))
// Hibakezelés
.catch(error => console.error('There was a problem with the fetch operation:', error));
