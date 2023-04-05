// class Employee {
//   constructor(name, age, gender, position) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.position = position;
//   }

//   doWork() {
//     console.log('Working working working');
//   }

//   greetings() {
//     console.log(`Greetings from ${this.name}`);
//   }
// }

// class Engineer extends Employee {
//   constructor(name, age, gender) {
//     super(name, age, gender, 'engineer');
//   }

//   greetings() {
//     console.log(
//       `Greetings from ${this.name} the ${this.position}`
//     );
//   }

//   power() {
//     console.log('we never came to work early');
//   }
// }

// class Accountant extends Employee {
//   constructor(name, age, gender) {
//     super(name, age, gender, 'accountant');
//   }

//   greetings() {
//     console.log(
//       `Hello my name is ${this.name}, I'm an ${this.position}`
//     );
//   }
// }

// const arrizal = new Engineer('arrizal', 20, 'male');
// const budi = new Accountant('budi', 30, 'male');
// const conrad = new Employee('conrad', 27, 'male', 'HR');

// // console.log(arrizal);
// arrizal.power();
// // budi.greetings();
// conrad.power();
// // mark.greetings();

class Vehicle {
  #vin;
  constructor(
    type,
    manufacturer,
    year,
    classification,
    vin
  ) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.year = year;
    this.classification = classification;
    this.#vin = vin;
  }

  start() {
    console.log('engine on');
  }

  getFrameNo() {
    return this.#vin;
  }

  setFrameNo(no) {
    this.#vin = no;
  }
}

class Car extends Vehicle {
  constructor(type, manufacturer, year, feature) {
    super(
      type,
      manufacturer,
      year,
      'car',
      Math.ceil(Math.random() * 1000000)
    );
    this.feature = feature;
  }
}

const brio = new Car(
  'brio',
  'honda',
  2020,
  'electric car seat'
);

// console.log(brio.getFrameNo());
// brio.setFrameNo(439573485456);
// console.log(brio.getFrameNo());

// class Truck extends Vehicle {
//   constructor(
//     type,
//     manufacturer,
//     year,
//     payload,
//     maximumLoad
//   ) {
//     super(type, manufacturer, year, 'truck');
//     this.payload = payload;
//     this.maximumLoad = maximumLoad;
//   }
// }

// const pajero = new Car('Pajero', 'Mitsubishi', 2020, [
//   'sunroof',
//   'AWD',
// ]);

// console.log(pajero);

module.exports = { Car, Vehicle };
