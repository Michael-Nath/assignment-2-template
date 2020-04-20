const fibonacciNums = (n) => {
    dynamic = [0, 0, 1]
    if (n <= 0) return [];
    else if (n == 1) return [0];
    else if (n == 2) return [0, 0];
    else if (n == 3) return [0, 0, 1];
    else {
    for (i = 3; i < n; i++) {
        dynamic.push(dynamic[i - 1] + dynamic[i - 2]);
        }
    return dynamic;
    }
};

module.exports = fibonacciNums;
