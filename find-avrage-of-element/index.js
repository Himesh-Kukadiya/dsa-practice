function findAvrageOfElements(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return arr.reduce((sum, element) => sum + element, 0) / arr.length;
}

module.exports = findAvrageOfElements;