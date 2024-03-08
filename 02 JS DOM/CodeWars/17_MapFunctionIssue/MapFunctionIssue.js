function func(item) {
    return (item & 1) == 0
  }
  
  function map(arr, func) {
    if (typeof func != "function") return "given argument is not a function"
    if (arr.length < 1 || arr.some(isNaN)) return "array should contain only numbers"
    return arr.map(func)
  }