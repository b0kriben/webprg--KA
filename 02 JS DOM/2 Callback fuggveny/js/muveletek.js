const osszead = (sz1, sz2) => sz1 + sz2;
const kivonas = (sz1, sz2) => sz1 - sz2;
const szorzas = (sz1, sz2) => sz1 * sz2;
const osztas = (sz1, sz2) => sz1 / sz2;


// Ellenőrzés:
let result = szamol(osszead, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result =  szamol(szorzas, 4, 6);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result =  szamol(osztas, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);