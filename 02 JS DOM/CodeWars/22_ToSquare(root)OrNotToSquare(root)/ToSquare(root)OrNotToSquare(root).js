function squareOrSquareRoot(array) {
  return array.map(x => isSquare(x) ? Math.sqrt(x) : x*x);  
}
  
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}