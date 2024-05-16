function array(string){
    var data = string.split(',');
    data.pop()
    data.shift();
    return data.length ? data.join(' ') : null;
}