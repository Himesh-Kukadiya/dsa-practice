function findMaxElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 0;

    if (arr.length === 1)
        return arr[0];

    return arr.reduce((max, element) => max > element ? max : element, arr[0]);
}

module.exports = findMaxElement;