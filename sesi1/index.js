//var bisa di redeclare, reassign
// var number = 10;
// console.log(number);

// var number = 13;
// console.log(number);

// number = 20;
// console.log(number);

//let tidak bisa di redeclare, bsia di reassign
// let name = 'arrizal';
// console.log(name);

// name = 'ujang';
// console.log(name);

// let name = 'budi'

//const tidak bisa di redeclare, tidak bisa di reassign
// const pi = 3.14;
// console.log(pi);

// const pi = 'lele';
// pi = 12;
// console.log(pi);

let score = 10;
score++;
score--;
score += 5;
score = score + 5;
score *= 3;
score -= 12;

// console.log(score);

// let laptop = "peter's";
// let sentence = `peter's laptop has been "stolen"

// // he's very sad`;
// let fullName = 'arrizal\nrahmat\nkurniawan';
// console.log(fullName);

// let hobby =
//   'programmingurt ujiergnkdnjkdfjk gsdsdsdasdasdsaxasdasda';

// console.log(hobby.length);
// console.log(hobby[hobby.length - 1]);
// const getNumber = () => 18;

// const firstName = 'arrizal';
// const lastName = 'kurniawan';

// let fullName = `${firstName} ${lastName} ${
//   3 + 12 + getNumber()
// }`;

// console.log(firstName + ' ' + lastName);
// console.log(fullName);

// let isValid = true;
// let monster = 'cookie';

// const container = ['pisang', 10000, true, 'kudanil'];
// const scores = [90, 95, 100, 32, 12, 98];
// const names = [
//   'arrizal',
//   'cucung sukardi',
//   'jaelani',
//   [1, 2, 3, [13, 22, 13, 13, 16, 28]],
// ];

// const [programmer, gamer, vendor, numbers] = names;
// const [one, two, three, array] = numbers;
// const idx = 2;
// console.log(names[3][3][names[3][3].length - 1]);

// const scores = [100, 90, 95, 22];
// scores.push(78);
// scores.unshift(13);
// scores.shift();
// scores.pop();
// scores[2] = 33;
// console.log(scores);

const animals = [
  'cat',
  'duck',
  'platypus',
  'hippoppotamus',
];

const slicedAnimals = animals.splice(1, 3);
console.log(slicedAnimals);
// console.log(animals);
