//No Loops 2
function check(a,b){
    return a.includes(b);
  };
  
  //Cat Years Dog Years(2)
  const ownedCatAndDog = (catYears, dogYears) => [
      (catYears < 24)? catYears / 15 : (catYears - 16) / 4,
      (dogYears < 24)? dogYears / 15 : (dogYears - 14) / 5
      ].map(Math.floor);
  
  //Enumerable Magic
  function eachCons(array, n) {
    let res = [];
    
    for(let i = 0; i < array.length; i++){
      res.push(array.slice(i,i + n));
    }
    
      return res.filter(e => e.length === n);
  }
  
  //Operations with sequence
  function calc(a) {
    return a.reduce((a, elt, i) => {
        if (elt > 0) elt *= elt;
        if ((i + 1) % 3 === 0) elt *= 3;
        if ((i + 1) % 5 === 0) elt *= -1;
        return a + elt;
      }, 0);
  }
  
  //Minimize Sum Of Array
  function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }
  
  //From A to Z
  function gimmeTheLetters(sp) {
    let s = ""
    for(let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) s += String.fromCharCode(i)
    return s
  }
  
  //Remove First and Last Character Part Two
  function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }
  
  //Sum of array singles
  function repeats(arr){
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
  };
  
  //To square(root) or not to square(root)
  function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }
  
  //Cat Years, Dog Years
  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }
  
  //Every nth array element
  function every(arr, interval, start){
    var result = [];
    for (var i = start || 0; i < arr.length; i += interval || 1) {
      result.push(arr[i]);
    }
    return result;
  }
  
  //Odd Ones Out!
  function oddOnesOut(nums) {
  
    const results = {};
    nums.forEach(num => {
      if (results[num]) {
        results[num]++
      } else {
        results[num] = 1
      }
    });
  
    return nums.filter(el => results[el] % 2 === 0)
  }
  
  //Simple consecutive pairs
  function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
      if (Math.abs(array[i] - array[i + 1]) === 1)
        count += 1;
    return count;
  }
  
  //Map function issue
  function func(item) {
    return (item & 1) == 0
  }
  
  function map(arr, func) {
    if (typeof func != "function") return "given argument is not a function"
    if (arr.length < 1 || arr.some(isNaN)) return "array should contain only numbers"
    return arr.map(func)
  }
  
  //Find the middle element
  function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }
  
  //Is every value in the array an array?
  function arrCheck(val) {
    return val.every(function(x) {
      return Array.isArray(x);
    });
  };
  
  //Sort Arrays(Ignoring Case)
  sortme = function( names ){
      return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    }
  
  //Find the Mine!
  function mineLocation(field) {
      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
          if (field[i][j] === 1) {
            return [i, j];
          }
        }
      }
  }
  
  //Array - squareUp b!
  function squareUp(n) {
      let resultArray = [];
    
      for (let x = 1; x <= n; x++) {
        for (let i = n; i > 0; i--) {
          if (i <= x) {
            resultArray.push(i);
          } else {
            resultArray.push(0);
          }
        }
      }
    
      return resultArray;
  }
  
  //My head is at the wrong end!
  function fixTheMeerkat(arr) {
      return arr.reverse();
     }
  
  //Leonardo numbers
  L = (n, L0, L1, add) => {
    res = [];
    for (let i = 0; i < n; i++) {
      res.push(L0);
      [L0, L1] = [L1, L0 + L1 + add];
    }
    return res;
  };
  
  //Insert dashes
  function insertDash(num) {
      const numArray = num.toString().split("");
      let dashedNumber = numArray.reduce((result, digit, index) => {
          result += digit;
          if (digit % 2 && (numArray[index + 1] && numArray[index + 1] % 2)) {
              result += "-";
          }
          return result;
      }, "");
  
      return dashedNumber;
  }
  
  //Maximum product
  function adjacentElementsProduct(array) {
      let maxProduct = array[0] * array[1];
  
      for (let i = 1; i < array.length - 1; i++) {
          const product = array[i] * array[i + 1];
          maxProduct = Math.max(maxProduct, product);
      }
  
      return maxProduct;
  }
  
  //Mean vs Median
  const meanVsMedian = arr => {
      const sortedArr = [...arr].sort((a, b) => a - b);
      const indexOfMedian = Math.floor((sortedArr.length - 1) / 2);
      const median = sortedArr[indexOfMedian];
      const mean = arr.reduce((acc, currentValue) => acc + currentValue) / arr.length;
  
      if (median > mean) {
          return "median";
      }
      else if (median < mean) {
          return "mean";
      }
      else {
          return "same";
      }
  }
  
  //Get the mean of an array
  const getAverage = (marks) => {
      if (marks.length === 0) {
        return 0; 
      }
  
      const total = marks.reduce((sum, mark) => sum + mark, 0);
      return Math.floor(total / marks.length);
    };
  
    const marksArray = [75, 80, 95, 60, 85];
    const average = getAverage(marksArray);
    console.log("Avarage: " + average);
  
  //Swap the head and the tail
  function swapHeadAndTail(arr) {
      let len = Math.floor(arr.length / 2),
          head = arr.slice(0, len),
          tail = arr.slice(-len);
      return newarr = tail.concat(arr.slice(len, -len), head);
    }
    
    let inputArray = [1, 2, 3, 4, 5];
    let swappedArray = swapHeadAndTail(inputArray);
    console.log(swappedArray);
  
  //Get number from string
  function getNumberFromString(s) {
    let betuKi = s.replace(/[^0-9]/g, "");
    return parseInt(betuKi);
  }
  
  //All or nothing
  const possiblyPerfect = (key, answers) => {
      let helyesValaszSzamlalo = 0;
      let osszesHelytelenValasz = 0;
    
      for (let i = 0; i < key.length; i++) {
        const vartValasz = key[i];
        const kapottValasz = answers[i];
    
        if (vartValasz !== "_") {
          osszesHelytelenValasz++;
    
          if (vartValasz === kapottValasz) {
            helyesValaszSzamlalo++;
          }
        }
      }
    
      return helyesValaszSzamlalo === osszesHelytelenValasz || helyesValaszSzamlalo === 0;
    };
  
  //Sum of Odd Cubed Numbers
  function cubeOdd(arr) {
    let res = [];
    let result = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return undefined;
      } else {
        res.push(Math.pow(arr[i], 3));
        if (res[i] % 2 !== 0) {
          result += res[i];
        }
      }
    }
  
    return result;
  }
  var result = cubeOdd([1, 2, 3, 4, 5]);
  console.log(result);
  
  //Smallest value of an array
  function min(arr, visszateresiErtek) {
      if (visszateresiErtek === "value") {
        return Math.min(...arr);
      } else if (visszateresiErtek === "index") {
        return arr.indexOf(Math.min(...arr));
      }
    }
    const minErtek = min([1, 2, 3, 4, 5], "value");
    const minIndex = min([1, 2, 3, 4, 5], "index");
  
    console.log("Minimum érték:", minErtek);
    console.log("Minimum érték indexe:", minIndex);

//Convert Hash To An Array
function convertHashToArray(hash){
  let result = []
  for (let i in hash) {
    result.push([i,hash[i]])
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        [result[i],result[j]] = [result[j],result[i]]
      }
    }
  }
  return result
}

//Blowing Birthday Candles
function blowCandles(str) {
  let candles = str.split('').map(d=>d|0);
  let time = 0;
  for (let i=0; i<str.length; i++) {
    if (candles[i] > 0) {
      time += candles[i];
      candles[i+1] -= candles[i];
      candles[i+2] -= candles[i];
    }
  }
  return time;
}

//Find the divisors!
function divisors(integer) {
 const divisors = Array
    .from({length: integer }, (_, i) => i)
    .filter(i => i !== 1 && integer % i === 0)
 
   return divisors.length === 0 ? `${integer} is prime` : divisors
};

//Binary Addition
function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}

//Difference between two collections
function diff(a, b){
  var arr=[];
  for (var i=0; i<a.length; ++i)
    if (b.indexOf(a[i])==-1 && arr.indexOf(a[i])==-1)
      arr.push(a[i]);
  for (var i=0; i<b.length; ++i)
    if (a.indexOf(b[i])==-1 && arr.indexOf(b[i])==-1)
      arr.push(b[i]);
  arr.sort();
  return arr;
}

//Squeaky Window
function sliding (nums, k) {
  let result = []
  
  for (let i = 0; i <= nums.length - k; i += 1) {
    let sample = nums.slice(i, i + k)
    result.push(Math.max(...sample))
  }

  return result
}

//Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  for(let i = 0; i < arr.length; i++) {
    if(mixArr.indexOf(arr[i]) < 0) {
      return arr[i];
    }
  }
  return 0;
}

//De-Emojify
function deEmojify(emojiString) {
  const signs = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':(' ]
  let result = ''
  if(emojiString) {
    const arr = emojiString.split('  ')  
    for(const element of arr) {    
      const x = element.split(' ').map(el => signs.indexOf(el)).join('')
      result += String.fromCharCode(parseInt(x))
    }
  }
  return result
}

//Complementary DNA
function DNAStrand(dna){
  let newDNA = "";
  let dnaKeys = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  
  for (let i = 0; i < dna.length; i++) {
    let char = dna[i];
    
    newDNA += dnaKeys[char];
  }
  
  return newDNA;
}

//Middle Me
function middleMe(N, X, Y){
  
const repeat = Y.repeat(N);
  
  const middlePosition = repeat.length / 2;
  
  if (parseInt(middlePosition) === middlePosition) {
    return repeat.slice(0,middlePosition) + X + repeat.slice(middlePosition);
    }
  return X;
  }