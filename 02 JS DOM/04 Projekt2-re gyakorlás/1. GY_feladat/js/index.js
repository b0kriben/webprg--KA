
let firstName = "John";
let lastName = "Smith";
const user = {firstName:"John", lastName:"Smith"};

user.firstName = "Paul";
delete user.firstName;
/*let user = [firstName, lastName];*/

//const user = {firstName:"John", lastName:"Smith"};
document.getElementById('name').innerHTML = user.firstName + " "  + user.lastName//user[firstName] + user[lastName];

/*function userName()
{
    const user = {firstName:"John", lastName:"Smith"}
    document.getElementById('user1').innerHTML = user.firstName;

    document.getElementById("kimenet").value;
}

/*function torol(){
    let index = document.getElementById(0).value;
    let ujFirstName = document.getElementById("ujname").value;

    tomb.splice(index, 1, ujFirstName);
}*/

/*Írd le az utasításokat, melyek a következőt valósítják meg:


1. Hozz létre egy üres user objektet
2. Add a fistName property-t az obketumhoz a John értékkel.
3. Add a lastName property-t az obketumhoz a Smith értékkel.
4. Módisítsd a firstName-et Paul-ra.
5. Töröld a firstName property-t az objektből.*/