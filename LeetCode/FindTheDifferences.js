let findTheDifference = function (s, t) {
    let frequencies = {};

    for (let char of s) {
        if (frequencies[char] === undefined) {
            frequencies[char] = 1;
        } else {
            frequencies[char]++;
        }
    }

    for (let char of t) {
        if (frequencies[char] !== undefined && frequencies[char] > 0) {
            frequencies[char]--;
        } else {
            return char;
        }
    }

    return -1;
};