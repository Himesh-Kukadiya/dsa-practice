function sumOfElements(arr) {
    if (!Array.isArray(arr)) return 0;

    if (arr.length === 0) return 0;

    return arr.reduce((sum, element) => sum + element, 0);
}

module.exports = sumOfElements;