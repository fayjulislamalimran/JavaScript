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

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeapYear1 = isLeapYear(2043);
console.log(isLeapYear1);

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 400 !== 0 && year % 100 === 0) {
    return false;
  }
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return true;
  }
}
const isLeapYear2 = isLeapYear(2100);
console.log(isLeapYear2);

// Pracice
function incomeAmount(amount) {
  if (amount < 50000) {
    return 10;
  } else if (amount > 50000 && amount <= 100000) {
    return 20;
  } else if (amount > 100000 && amount <= 200000) {
    return 30;
  } else if (amount > 200000) {
    return 40;
  } else {
    return " Give me right valu";
  }
}
const incomeAmounts = incomeAmount(500000);
console.log(incomeAmounts);

function deliveryInfo(kg) {
  if (kg < 10) {
    return 100;
  } else if (kg < 20) {
    return 300;
  } else if (kg <= 50) {
    return 1000;
  } else if (kg > 50) {
    return kg * 100;
  }
}
const productKg = deliveryInfo(51);
console.log(productKg);

function marksInput(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 70 || marks >= 79) {
    return "B";
  } else if (marks >= 60 || marks >= 69) {
    return "C";
  } else if (marks >= 50 || marks >= 59) {
    return "D";
  } else {
    return "F";
  }
}
const marks = marksInput(2);
console.log(marks);

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }

  if (odds.length === 0) return null; // To avoid division by zero

  const sum = odds.reduce((acc, num) => acc + num, 0);
  return sum / odds.length;
}

const nums = [12, 13, 65, 11, 24, 31];
const oddNumberAvg = oddAverage(nums);
console.log(oddNumberAvg);

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }
}
console.log(sum);
