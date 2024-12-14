//for 1
let k = 5;

for (let n = 10; n >= 1; n--) {
    console.log(k);
}

//for 2
let price = 1000;

for (let weight = 0.1; weight <= 1; weight += 0.1) {
    const cost = price * weight;
    console.log(`${weight} kg konfet narxi: ${cost}`);
}

//for 3

const n = 5;
let sum = 0;

for (let i = n; i <= 2 * n; i++) {
    sum += i ** 2;
}

console.log(`Yig'indi: ${sum}`);

//for 4

const N = 5;
let summa = 0;

for (let i = 1; i <= N; i++) {
    summa += i ** (N - i + 1);
}

console.log(`Yig'indi: ${summa}`);

//for 5

const A = 2;
const B = 5;

for (let i = A; i <= B; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i);
    }
}

//for 6
const number = 28; // Sonni kiriting

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}