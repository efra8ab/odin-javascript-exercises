const sumAll = (a, b) => {
    let total = 0
    let smallest = 0
    let biggest = 0

    if (!Number.isInteger(a) || !Number.isInteger(b) ||
        a < 0 || b < 0){
        return 'ERROR'
    }

    if (a <= b) {
        smallest = a
        biggest = b
    }
    else {
        smallest = b
        biggest = a
    }

    for (smallest; smallest <= biggest; smallest++){
        total += smallest
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
