const swapHeadAndTail = (array) => {
    let l = array.length;
    let r = Math.round(l / 2);
    let f = Math.floor(l / 2);
    let s1 = array.splice(0, f);
    let s2 = array.splice(r - f);
    return s2.concat(array, s1);
}