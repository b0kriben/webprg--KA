const swapHeadAndTail = (array) => {
    let l = array.length;
    let r = Math.round(l / 2);
    let f = Math.floor(l / 2);
    let a = array.splice(0, f);
    let b = array.splice(r - f);
    return b.concat(array, a);
}