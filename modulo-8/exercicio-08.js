const average = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num);
    return sum / numbers.length
};

console.log(average(10,50,30));

