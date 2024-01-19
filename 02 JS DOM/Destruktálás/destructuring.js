//1. feladat Tömb
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color] = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);
//1. kérdés: Ugyanolyan változóneveket kell használni.
//2. kérdés: Fontos a változók sorrendje.



//2. feladat Objektum
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};
let {bookTitle, bookAuthor, publicationYear, language} = book;
console.log(bookTitle);
console.log(bookAuthor);
console.log(publicationYear);
console.log(language);
//1. kérdés: Más változóneveket kell használni.
//2. kérdés: Fontos a változók sorrendje.



//3. feladat Függvény
function printStudentInfo({name, age, grade, subject}){
    console.log(`${name} ${age} ${grade} ${subject}`);
    }
    let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };
    printStudentInfo(student);
//1. kérdés: Ugyanolyan változóneveket kell használni.
//2. kérdés: Nem fontos a változók sorrendje.