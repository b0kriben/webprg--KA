function repeats(arr){
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((a,b) => a + b, 0);
}