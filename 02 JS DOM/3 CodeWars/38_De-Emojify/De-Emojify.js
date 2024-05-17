const deEmojify = (string) => {
    if (!string) return '';

    const emotion = {
        ':)': 0,
        ':D': 1,
        '>(': 2,
        '>:C': 3,
        ':/': 4,
        ':|': 5,
        ':O': 6,
        ';)': 7,
        '^.^': 8,
        ':(': 9
    };


    return string.split('  ')
        .map(str => str.split(' '))
        .map(arr => arr.map(str => emotion[str]).join(''))
        .map(num => String.fromCodePoint(num))
        .join('');
};