function countElement(arr) {
    if (Array.isArray(arr)) {
        let count = 0;

        for (a in arr) {
            count++;
        }

        return count;
    }
    return 'Please provide valid array'
}

module.exports = countElement;