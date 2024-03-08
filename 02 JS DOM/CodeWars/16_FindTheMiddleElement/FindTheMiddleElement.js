var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
  }