/*
const arr = ["a", "b", "c", "d", "e"];

console.log(arr.at(0));
console.log(arr.at(-1)); // get last element in array ES 2022 feature "at"
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// For of method of looping over arrays
/* 
for (const movement of movements) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
}
*/

// forEach method of looping over arrays
/*
movements.forEach((movement, i, array) => {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
});
*/

// const currencies = new Map([
// 	["USD", "United States dollar"],
// 	["EUR", "Euro"],
// 	["GBP", "Pound sterling"],
// ]);

// currencies.forEach((currency, key, map) => {
// 	console.log(`${key} : ${currency}`);
// });

// const euroToUsd = 1.1;

// const movementsUSD = movements
// 	.filter((movement) => movement > 0)
// 	.map((movement) => movement * euroToUsd)
// 	.reduce((accumulator, movement) => accumulator + movement);

// console.log(movementsUSD);

// const deposits = movements.filter((mov) => mov > 0);
// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(withdrawals);

// Generate array with 100 random dice numbers
/*
const randomDiceNumbers = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);

console.log(randomDiceNumbers);
*/
