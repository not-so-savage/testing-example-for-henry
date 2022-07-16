function calculateSum(numbers) {
    let sum = 0;

    numbers.forEach(number => {
        sum += number;
    })

    return sum;
}

function calculateProduct(numbers) {
    let product = 1;

    numbers.forEach(number => {
        product *= number
    })

    return product;
}

module.exports = { calculateSum, calculateProduct };
