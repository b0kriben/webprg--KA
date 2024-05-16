function gimmeTheLetters(sp) {
    let s = "";
    for(let i = sp[0].charCodeAt(); i <= sp[2].charCodeAt(); i++) s += String.fromCharCode(i);
    return s;
}