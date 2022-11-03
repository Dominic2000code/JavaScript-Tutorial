"use strict";
// Coding Challenge #1 & #2
/*const MarkHeight = 1.88;
const MarkMass = 95;

const JohnHeight = 1.75;
const JohnMass = 85;

const MarkBMI = MarkMass / (MarkHeight * MarkHeight);
const JohnBMI = JohnMass / (JohnHeight * JohnHeight);

const MarkHigherBMI = MarkBMI > JohnBMI;
console.log(MarkBMI, JohnBMI, MarkHigherBMI);

if (MarkHigherBMI) {
	console.log(`Mark's BMI: ${MarkBMI} is higher than John's BMI: ${JohnBMI}`);
} else {
	console.log(`John's BMI: ${JohnBMI} is higher than Mark's BMI: ${MarkBMI}`);
}
*/

// Coding Challenge #3
/*// Dolphins Scores
const scoreDolphin_1 = 97;
const scoreDolphin_2 = 112;
const scoreDolphin_3 = 101;
// Koalas Scores
const scoreKoala_1 = 109;
const scoreKoala_2 = 95;
const scoreKoala_3 = 106;
//Average Calculation for both teams
const averageDolphinScore = (scoreDolphin_1 + scoreDolphin_2 + scoreDolphin_3) / 3;
const averageKoalaScore = (scoreKoala_1 + scoreKoala_2 + scoreKoala_3) / 3;

// Logging Average for both teams
console.log(
	`Dolphins average score: ${averageDolphinScore} and Koalas average score: ${averageKoalaScore}`
);

if (averageDolphinScore > averageKoalaScore && averageDolphinScore >= 100) {
	console.log("Dolphins Win...");
} else if (averageDolphinScore < averageKoalaScore &&averageKoalaScore >= 100) {
	console.log("Koalas Win...");
} else if (averageDolphinScore === averageKoalaScore && (averageKoalaScore && averageDolphinScore) >= 100) {
	console.log("Draw");
} else {
	console.log("No team wins trophy");
}
*/

// Coding Challenge #4
/*
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

console.log(
	`The bill was $${bill}, the tip was ${
		bill * tip
	}, and the total value is ${bill + bill * tip}`
);
*/

// Coding Challenge #4
/*
// Dolphins Scores
const scoreDolphin_1 = 85;
const scoreDolphin_2 = 54;
const scoreDolphin_3 = 41;
// Koalas Scores
const scoreKoala_1 = 23;
const scoreKoala_2 = 34;
const scoreKoala_3 = 27;

const calcAverage = (num1, num2, num3) => {
	return (num1 + num2 + num3) / 3;
};

const avgDolphin = calcAverage(scoreDolphin_1, scoreDolphin_2, scoreDolphin_3);
const avgKoala = calcAverage(scoreKoala_1, scoreKoala_2, scoreKoala_3);

console.log(`avgDolphin: ${avgDolphin} and avgKoala: ${avgKoala}`);

const checkWinner = (avgDolphin, avgKoala) => {
	if (avgDolphin >= avgKoala * 2) {
		console.log(`Dolphins win (${avgDolphin} : ${avgKoala})`);
	} else if (avgKoala >= avgDolphin * 2) {
		console.log(`Koalas win (${avgKoala} : ${avgDolphin})`);
	} else {
		console.log("No one wins");
	}
};

checkWinner(avgDolphin, avgKoala);
*/

// Coding Challenge #5
/*
const calcTip = (bill) => {
	const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

	return tip * bill;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

// Coding Challenge #6
/*
const jonas = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	birthYear: 1991,
	job: "teacher",
	calcAge: function () {
		this.age = 2022 - this.birthYear;
		return this.age;
	},
	hasDriversLicense: false,
	infoFunc: function () {
		this.info = `${this.firstName} ${this.lastName} is a ${
			this.age
		} year old ${this.job}, with ${
			this.hasDriversLicense ? "a" : "no"
		} drivers license`;
		return this.info;
	},
};

jonas.calcAge();
jonas.infoFunc();

console.log(jonas.info);
*/

// Coding Challenge #7
/*
const mark = {
	firstName: "Mark",
	lastName: "Miller",
	markHeight: 1.69,
	markWeight: 78,
	calcBMI: function () {
		this.bmi = this.markWeight / (this.markHeight * this.markHeight);
		return this.bmi;
	},
};

const john = {
	firstName: "John",
	lastName: "Smith",
	johnHeight: 1.95,
	johnWeight: 92,
	calcBMI: function () {
		this.bmi = this.johnWeight / (this.johnHeight * this.johnHeight);
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi) {
	console.log(
		`Marks's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})`
	);
} else {
	console.log(
		`John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})`
	);
}
*/

// Coding Challenge #8
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
	const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
	return tip * bill;
};

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	totals.push(calcTip(bills[i]) + bills[i]);
}

const calcAverage = (arr) => {
	let totalElementsInArray = 0;

	for (let i = 0; i < arr.length; i++) {
		totalElementsInArray = totalElementsInArray + arr[i];
	}
	// console.log(totalElementsInArray)
	return totalElementsInArray / arr.length;
};

console.log(calcAverage(totals));
console.log(tips, bills, totals);
*/

// Coding Challenge #9
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures
//of one day, calculate the temperature amplitude.
//Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/*
const temperatures = [3, -2, -6, -1, "error", 9, 12, 17, 15, 14, 9, 5];
const temperatures2 = [18, 25, 1, -7];

const calcTempAmplitude = (temp1, temp2) => {
	const arr = temp1.concat(temp2);
	let max = arr[0];
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (typeof arr[i] !== "number") {
			continue;
		}
		if (arr[i] >= max) {
			max = arr[i];
		}
		if (arr[i] <= min) {
			min = arr[i];
		}
	}
	// console.log(min, max);
	const amplitude = max - min;
	return amplitude;
};

console.log(calcTempAmplitude(temperatures, temperatures2));
*/

// Coding Challenge #9

// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with these temperatures
// Example: [127,21,23] will print '... 17C in 1 days ...
// 21C in 2 days ... 23C in 3 days ...'

// Create a function 'printForecast' which takes in an array
// 'arr' and logs a string like the above to the console

// Test data: [12, 5, -5, 0, 4]

// 1. create an empty string builder
// 2. use string templates to write string
// 3. Loop over arr temps and concatenate strings to form complete string
// 4. Return built str at the end of function
/*
const printForecast = (arr) => {
	let strBuilder = "";
	for (let i = 0; i < arr.length; i++) {
		strBuilder += `... ${arr[i]}ºC in ${i + 1} days ${
			i === arr.length - 1 ? "..." : ""
		}`;
	}

	return strBuilder;
};

console.log(printForecast([12, 5, -5, 0, 4]));
*/

// Coding Challenge #10
/*
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};
console.log(game.players);
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
// const [players1, players2] = game.players; method 2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const finalPlayers = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(finalPlayers);

const { team1, team2, x: draw } = game.odds;
// console.log(`Team 1: ${team1}, Team 2: ${team2}, Draw: ${draw} `);

const printGoals = function (...players) {
	let totalGoals = 0;
	console.log("These players scored");
	for (let i = 0; i < players.length; i++) {
		console.log(players[i]);
	}
	console.log(`${players.length} goals were scored`);
};

printGoals("Davis", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

const winner = game.odds.team1 < game.odds.team2 && game.odds.team1;
console.log(winner);
*/

// Coding Challenge #11
/*
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

for (const [score, player] of game.scored.entries()) {
	console.log(`Goal ${score + 1} : ${player}`);
}

let totalOdds = 0;
for (const [key, val] of Object.entries(game.odds)) {
	totalOdds += val;
}

const averageOdd = totalOdds / 3;
console.log(`The average odd is : ${averageOdd}`);

for (const [team, odd] of Object.entries(game.odds)) {
	const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
	console.log(`odd ${teamStr} : ${odd}`);
}

const scorers = {};

// for (const player of game.scored) {
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

for (const player of game.scored) {
	scorers[player] = 0;
}

for (const player of game.scored) {
	if (scorers[player] == scorers[player]) {
		scorers[player] += 1;
	}
}
console.log(scorers);
*/

// Coding Challenge #12
/*
const gameEvents = new Map([
	[17, "⚽ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🟨 Yellow card"],
	[69, "🟥 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽ GOAL"],
	[80, "⚽ GOAL"],
	[92, "🟨 Yellow card"],
]);

const uniqueEvents = new Set();

for (const [time, event] of gameEvents) {
	uniqueEvents.add(event);
}

const events = [...uniqueEvents];

const events2 = [...new Set(gameEvents.values())];
console.log(events2);

gameEvents.delete(64);
console.log(gameEvents);

for (const [time, event] of gameEvents) {
	const division = time >= 45 ? "[ SECOND HALF ]" : "[ FIRST HALF ]";
	console.log(`${division} ${time}: ${event}`);
}
*/

// Coding Challenge #13
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea");

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
	const data = text.value.split("\n");
	for (const [i, d] of data.entries()) {
		if (d.includes("_")) {
			const [first, second] = d.toLowerCase().trim().split("_");
			// const camelCase_ = `${first}${second[0].toLocaleUpperCase()}${second.slice(1)}`;// method 1
			const camelCase_ = `${first}${second.replace(
				second[0],
				second[0].toUpperCase()
			)}`; // method 2
			console.log(`${camelCase_.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
		} else {
			console.log("Input does not contain '_'");
		}
	}
});
*/

// Coding Challenge #14
/*
const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0, 0, 0, 0]. More in the next section 😃
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		const answer = Number(
			prompt(
				`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n (Write option number)`
			)
		);
		if (answer < 0 || answer > 3) {
			console.log("Your answer should be between 0 and 3");
		} else {
			this.answers[answer]++;
		}

		this.displayResults();
		this.displayResults("string");
	},
	displayResults(type = "array") {
		if (type === "array") {
			console.log(this.answers);
		} else if (type === "string") {
			let str = "";
			for (const ans of this.answers) {
				str += ` ${ans},`;
			}
			console.log(`Poll results are ${str}`);
		}
	},
};

document
	.querySelector(".poll")
	.addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
*/

// Coding Challenge #15
/*
let func;
(function () {
	const header = document.querySelector("h1");
	header.style.color = "red";
	func = function () {
		header.style.color = header.style.color === "red" ? "blue" : "red";
	};
})();

document.querySelector("body").addEventListener("click", func);
*/

// Coding Challenge #16
// TEST DATA 1: Julia's data [3,5,2,12,7], Kate's data [4,1,15,8,3]
// TEST DATA 1: Julia's data [9,16,6,8,3], Kate's data [10,5,6,1,4]
/*
const checkDogs = function (JuliaData, KateData) {
	const correctData = JuliaData.slice();
	correctData.splice(0, 1);
	correctData.splice(-2);
	// console.log(correctData);
	const combinedData = [...correctData, ...KateData];

	return combinedData;
};

const printDogAges = function (ages) {
	ages.forEach(function (age, i) {
		if (age > 3) {
			console.log(`Dog ${i + 1} is an adult, and it's ${age} years old.`);
		} else {
			console.log(`Dog ${i + 1} is still a puppy 🐶.`);
		}
	});
};

const dogAges = checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

printDogAges(dogAges);
*/

// Coding Challenge #17

// Test Data 1 : [5,2,4,1,15,8,3]
// Test Data 1 : [16,6,10,5,6,1,4]
/*
const calcAverageHumanAge = (dogAges) => {
	const humanAges = dogAges.map((dogAge) => {
		if (dogAge <= 2) {
			return dogAge * 2;
		} else {
			return 16 + dogAge * 4;
		}
	});

	const humanAgesAbove18 = humanAges.filter((cur) => cur >= 18);

	const avg = humanAgesAbove18.reduce((acc, cur) => acc + cur, 0);
	return avg / humanAgesAbove18.length;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/

// Coding Challenge #18
// Rewrite previous challenge with method chaining
/*
const calcAverageHumanAge = (dogAges) =>
	dogAges
		.map((dogAge) => {
			if (dogAge <= 2) {
				return dogAge * 2;
			} else {
				return 16 + dogAge * 4;
			}
		})
		.filter((cur) => cur >= 18)
		.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
*/
