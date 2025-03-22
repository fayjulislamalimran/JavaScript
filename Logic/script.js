function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const imranHeight = inchToFeet(75);
console.log(imranHeight);

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemainning = inch % 12;
  const result = feetNumber + "fr" + inchRemainning + "inch";
  return result;
}
const fayjulHeight = inchToFeet2(75);
console.log(fayjulHeight);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function mileToGoj(goj) {
  const mile = goj * 1760;
  return mile;
}
const nabiganjMaile = mileToGoj(13);
console.log(nabiganjMaile);

function keluwatTokeluCalori(keluwat) {
  const keluCalori = keluwat * 860;
  return keluCalori;
}
const keluCalori = keluwatTokeluCalori(6);
console.log(keluCalori);

function hoursToSec(hours) {
  const hour = hours * 60;
  return hour;
}
const convertHours = hoursToSec(5);
console.log(convertHours);

function centimetersToMeters(meter) {
  const centimeter = meter / 100;
  return centimeter;
}
const centimeters = centimetersToMeters(1000);
console.log(centimeters);

function inchToCentimeters(inch) {
  const centimeter = inch * 2.54;
  return centimeter;
}
const isCentimeters = inchToCentimeters(200);
console.log(isCentimeters);

function poundTokilogram(pound) {
  const kilogram = pound / 0.453;
  return kilogram;
}
const kilograms = poundTokilogram(3);
console.log(kilograms);

function gojToMiter(goj) {
  const miter = goj * 0.91;
  return miter;
}
const miters = gojToMiter(10);
console.log(miters);
