function insertDash(number) {
  number = number.toString().split('')
  
  for(let i = 0; i < number.length; i++){
    if (number[i]%2 > 0 && number[i +1]%2 > 0){
      number[i] = number[i] + '-';
    }
  }
 
  return number.join('');
}