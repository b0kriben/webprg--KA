document.getElementById('betolt').addEventListener('click', load);
document.getElementById('newCourse').addEventListener('submit', createCourse);
document.getElementById("kereses").addEventListener("input", search);


//Kurzus keresés
function search() {
        let src = document.getElementById("kereses").value.toLowerCase();
        let courses = document.querySelectorAll("#list > li");
        courses.forEach(course => {
        let courseName = course.firstChild.textContent.toLowerCase();
        let stringList = course.querySelector('ul');
        let students = stringList.querySelectorAll('li');
        if (!src) {
            course.style.display = "block";
            students.forEach(student => {
                student.style.display = "block";
            });
        } else {
            if (courseName.includes(src)) {
                course.style.display = "block";
                students.forEach(student => {
                    student.style.display = "block";
                });
            } else {
                let result = false;
                students.forEach(student => {
                    let studentName = student.textContent.toLowerCase();
                    if (studentName.includes(src)) {
                        student.style.display = "block";
                        result = true;
                    } else {
                        student.style.display = "none";
                    }
                });
                course.style.display = result ? "block" : "none";
            }
        }
    });
}


//Kurzusok betöltése
async function load() {
    try{
        document.getElementById("betoltes").style.display = "block";
        const response = await fetch('https://vvri.pythonanywhere.com/api/courses')
        const data = await response.json()
        if (data)
            data.forEach(element => {
                console.log(element)
        })
        let list = document.getElementById('list');
        list.innerHTML = '';
        console.log(data);
        data.forEach(course => {
            let li = document.createElement('li');
            li.innerHTML = '(' + course.id + ') ' + course.name;
            let stringList = document.createElement('ul');
            course.students.forEach(student => {
                let stringLi = document.createElement('li');
                stringLi.textContent = '(' + student.id + ') ' + student.name;
                let editB = document.createElement('button');
                editB.textContent = 'Szerkesztés';
                editB.onclick = () => editStudent(student.id, student.name, course.id);
                let deleteB = document.createElement('button');
                deleteB.textContent = 'Törlés';
                deleteB.onclick = () => deleteStudent(student.id);
                stringLi.appendChild(editB);
                stringLi.appendChild(deleteB);
                stringList.appendChild(stringLi);
            });
            let addStudentC = document.createElement('input');
            addStudentC.type = "text";
            addStudentC.placeholder = "Új diák hozzáadása";
            let addStudentButton = document.createElement('button');
            addStudentButton.textContent = "Diák hozzáadása";
            addStudentButton.onclick = () => addStudent(course.id, addStudentC.value);
            li.appendChild(stringList);
            li.appendChild(addStudentC);
            li.appendChild(addStudentButton);
            list.appendChild(li);
        });
        document.getElementById("betoltes").style.display = "none";  
        } catch (error) {
            console.log('Hiba történt: ' + error);
            document.getElementById("betoltes").style.display = "none";
        }
    }

//Kurzus létrehozása
async function createCourse(event) {
    try{
        event.preventDefault();
        let courseName = document.getElementById('courseName').value;
        const response = await fetch('https://vvri.pythonanywhere.com/api/courses', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: courseName })
        })   
            const data = await response.json()
            if (data)
                data.forEach(element => {
                    console.log(element)
            })
        }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

//Diák hozzáadása
async function addStudent(courseId, studentName) {
    try{
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({ name: studentName, course_id: courseId })
        })
        const data = await response.json()
            if (data)
                data.forEach(element => {
                    console.log(element)
        })
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

//Diák nevének megváltoztatása
async function editStudent(studentId, currentName, courseId) {
    try{
        let newName = prompt("Adja meg a diák új nevét:", currentName);
        if (newName) {
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName, course_id: courseId })
        })
            const data = await response.json()
            if (data)
                data.forEach(element => {
                    console.log(element)
            })
        }
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}

//Diák törlése
async function deleteStudent(studentId) {
    try{
        if (confirm("Törölni szeretné ezt a diákot?")) {
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
            if (data)
                data.forEach(element => {
                    console.log(element)
        })
        }
    }
    catch(error) { 
        console.log("Hiba történt: " + error)
    }
}