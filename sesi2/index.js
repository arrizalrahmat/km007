// const person = {
//   fullName: 'Arrizal Rahmat Kurniawan',
//   gender: 'male',
//   age: 17,
//   scores: [100, 100, 100, 100],
//   fullNamee: 'heheh',
//   address: {
//     city: 'South Jakarta',
//     province: 'Jakarta',
//     country: 'Indonesia',
//   },
//   passed_classes: ['ReactJS', 'React Native', 'NextJs'],
//   favoriteFood: 'sayur bayam',
// };

// const { age, fullNamee, address } = person;
// const { city, province } = address;

// const keyTobeDisplayed = 'scores';

// console.log(person);
// delete person.fullNamee;
// person.hobby = 'playing games';
// person.program = {
//   name: 'React & React Native',
//   funding: 'Kampus Merdeka',
//   startDate: new Date(),
// };
// // person.program = {};
// // person.program.name = 'React & React Native';
// console.log(person.ujianScore[1]);

//cara 1
function show1() {
  console.log('aku sebuah function');
}

// show1();
//cara 2
const show2 = function () {
  console.log('aku sebuah function2');
};

// show2();
//cara 3
// const show3 = () => {
//   console.log('aku sebuah function3');
// };

// show3();

// const greetings = (name, drink) => {
//   console.log(
//     `Good afternoon ${name}! please drink your ${drink}`,
//     'ini di dalam function'
//   );

//   return 'tinky winky';
// };

// const namaKu = 'Arrizal';
// const minumanku = 'coffee';

// const sapaan = greetings('otong', 'bajigur');

// console.log(sapaan);

// const sum = (num1, num2) => num1 + num2;

// const calculate = (arrNum, cb) => {
//   const res1 = cb(arrNum[0], arrNum[1]);
//   const res2 = cb(arrNum[2], arrNum[3]);

//   return res1 + res2;
// };

// const data = [1, 7, 3, 9];
// const result = calculate(data, sum);

// console.log(result);

// const menu = {
//   makanan: ['nasi goreng', 'mie goreng'],
//   minuman: ['kopi', 'susu'],
// };
// const dinner = (makanan, minuman, cb) => {
//   cb(makanan, minuman);
// };

// const formulateWord = (makanan, minuman) => {
//   console.log(
//     `Malam ini saya makan ${makanan} dan minum ${minuman}`
//   );
// };

// dinner(menu.makanan[1], menu.minuman[0], formulateWord);

// const callbackFn = () => {
//   console.log('2 detik kemudian aku menampilkan ini');
// };

// setTimeout(callbackFn, 2000);

// const scores = [70, 80, 90, 22, 53, 100];

// const filterScoreHandler = (score) => {
//   if (score > 70) {
//     return score;
//   }
// };

// const filteredScores = scores.filter(filterScoreHandler);

// console.log(filteredScores);

const counter = {
  count: 0,
  increment() {
    this.count++;
  },
  incrementBy(num) {
    this.count += num;
  },
};

// console.log(counter.count);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.incrementBy(7);
// console.log(counter.count);
// console.log('Halo aku script di dalam index.js');

const sum = (num1, num2) => num1 + num2;
let result = 0;

// selector
const button2 = document.getElementById('button2');
const text = document.getElementById('text');
const button1 = document.getElementById('1');

// event handler
button2.addEventListener('click', () => {
  result += sum(3, 3);
  alert(result);
});

button1.addEventListener('click', () => {
  text.innerText += '1';
});

const handlerButton1 = () => {
  result += sum(2, 2);
  alert(result);
};
