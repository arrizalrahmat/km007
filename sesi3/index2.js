const { Car } = require('./index');

const mobilku = new Car('Almaz', 'Wuling', 2022, [
  'Sunroof',
  'Alexa',
]);

console.log(mobilku.getFrameNo());
