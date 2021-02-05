const numbers = [1, 2, 3, 4, 5, 6];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const result = element => element * element;

// const result = numbers.map(function (element) {
//     return element * element;
// });

// const result = numbers.map(x => x * x)

// const result = numbers.filter(x => x < 5)
const result = numbers.find(x => x < 3)
console.log(result);