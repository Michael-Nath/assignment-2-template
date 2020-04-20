const getFrequencies = (arr) => {
    frqs = {};
    for (i = 0; i < arr.length; i++) {
        if (frqs[arr[i]] === undefined) frqs[arr[i]] = 1;
        else frqs[arr[i]]++;
    }
    return frqs;
};

module.exports = getFrequencies;
