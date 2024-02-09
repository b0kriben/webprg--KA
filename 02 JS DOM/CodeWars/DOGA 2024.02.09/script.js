// All or Nothing
function possiblyPerfect(key,answers) {
    // kód helye
    let eredmeny = null;

    for( i=0; i<key.length; i++){
        if(key[i] !== "_"){
            const egyez = key[i] === answers[i];

            if(eredmeny === egyez){
                eredmeny = egyez;
                continue;
            }
        }
        if(eredmeny !== egyez){
            return false;
        }
    }
    return true;
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    // kód helye
    const mean = Math.floor(Math.reduce((a,b,n) => (a+b)/n.length));
    const median = Math.floor(Math.reduce((a,c) => a-c));
    const same = Math.floor(Math.reduce((a,d) => a=d));

    numbers[mean, median, same];

    return numbers;
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    // kód helye
    let l = arr.length / 2;
    let f = Math.floor(l);
    let arr = Math.reduce(f/l);
    const array =
                arr[0] == arr[2];
                arr[2] == arr[0];
                return array;
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);