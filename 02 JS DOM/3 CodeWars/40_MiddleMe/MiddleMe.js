var middleMe = function (N, X, Y) {
    var s = Y.repeat(N/2);
    
    return N % 2 ? X : s + X + s;
 };