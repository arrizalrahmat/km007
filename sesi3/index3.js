// const dayjs = require('dayjs');

// const todayraw = new Date();
// const today = dayjs(new Date()).format('DD MMMM YYYY');

// console.log(today);

// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// console.log('helo helo');
// setTimeout(() => {
//   console.log('lama banget coy');
// }, 2000);

// console.log('akhirnya selesai juga');

function fruitChopper(fruits) {
  return new Promise((resolve, reject) => {
    if (!fruits) {
      reject('Mana buahnya bosss?');
    }
    resolve(fruits.map((fruit) => `${fruit}-chopped`));
  });
}

// fruitChopper()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('process completed'));

const axios = require('axios');
let isLoading = false;

isLoading = true;
// promise
axios
  .get('https://randomuser.me/api/?results=10')
  .then((data) => {
    console.log(JSON.stringify(data.data, null, 4));
  })
  .catch((err) => console.log(err))
  .finally(() => {
    isLoading = false;
  });

//async await
const fetchUsers = async (cb) => {
  try {
    const result = await axios.get(
      'https://randomuser.me/api/'
    );

    cb(result.data, 6969);
  } catch (error) {
    console.log(error);
  }
};

function userHandler(hasilFetch, nomorTogel) {
  console.log(hasilFetch);
  console.log(nomorTogel);
}

fetchUsers(userHandler);
// const users = fetchUsers();
// console.log(users);
// fetchUsers();
