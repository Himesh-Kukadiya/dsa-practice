function findLowestElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    return arr.reduce((min, element) => min > element ? element : min, arr[0]);
}

module.exports = findLowestElement;