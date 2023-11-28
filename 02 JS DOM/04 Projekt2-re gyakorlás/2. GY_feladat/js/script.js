function isEmpty(paramete) {
    if (Object.keys(paramete).length == 0) {
        return true;
    }
    return false;
}
console.log(isEmpty({}));
console.log(isEmpty({name: "John" }));

/*Hozz létre egy

isEmpty(obj) függvényt, mely true-t ad vissza, ha paraméterként adott objekt üres és false.t ad vissza, ha az objekt nem üres.

console.log(isEmpty({})) --> true
console.log(isEmpty({name: "John" })) --> false*/