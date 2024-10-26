var countBits = function(n) {
    let oneNumber = new Array(n + 1).fill(0); 

    for (let i = 1; i <= n; i++) {
        oneNumber[i] = oneNumber[i >> 1] + (i & 1); 
    }

    console.log(oneNumber);
    return oneNumber;
};

countBits(9);