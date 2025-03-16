const numbers = [12, 98, 45, 63, 21, 72];
for (const num of numbers) {
  // console.log(num);
}

const fruits = ["Orange", "Apple", "Banana", "Jackfruit", "Watermelon"];
for (const item of fruits) {
  // console.log(item);
}

// Practice
const fiveSub = ["Book1", "Book2", "Book3", "Book4", "Book5"];
for (const bookItems of fiveSub) {
  // console.log(bookItems);
}
const myFavFood = ["Tea", "Orange"];
for (const favFood of myFavFood) {
  // console.log(favFood);
}

const footballPlayer = ["Messi", "Runaldu"];
for (const player of footballPlayer) {
  // console.log(player);
}

/*let num = 0;
while (num < 5) {
  console.log(num);
  num = num + 1;
}

let num = 0;
while (num < 5) {
  console.log("Bsmboo Eating High School");
  num++;
}

let tenTime = 0;
while (tenTime < 10) {
  console.log("I am writing progmmer 3 houres");
  tenTime++;
}

let addNum = 0;
while (addNum < 21) {
  console.log(addNum);
  addNum++;
}

let numPrint = 50;
while (numPrint <= 100) {
  console.log(numPrint);
  numPrint++;
}

let numUpdat = 110;
while (numUpdat <= 111) {
  console.log(numUpdat / 2);
  numUpdat++;
}

let num = 1;
while (num < 10) {
  console.log(num);
  num++;
}

let sum = 0;
let num = 1;
while (num <= 10) {
  console.log(num);
  sum = num + sum;
  num++;
}
console.log(sum);

// Practice
let num = 50;
let sum = 0;
while (num <= 100) {
  // console.log(num);
  sum = sum + num;
  num++;
}
console.log(sum)

let num = 5;
let sum = 0;
while (num <= 15) {
  // console.log(num);
  sum = sum + num;
  num++;
}
console.log(sum);

let studentNum = 1;
let sumNumber = 0;
while (studentNum <= 50) {
  // console.log(studentNum);
  studentNum++;
  sumNumber = studentNum + sumNumber;
}
console.log(sumNumber);

let num = 21;
while (num <= 50) {
  console.log(num);
  num++;
}

let sum = 0;
let number = 21;
while (number <= 50) {
  sum += number;
  console.log(sum);
  number++;
}
 


let sum = 0;
let number = 20;
while (number <= 40) {
  // console.log(number);
  number++;
  sum = number + sum;
}
console.log(sum);
*/
for (let num = 0; num < 5; num++) {
  // console.log(num);
}
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

for (let i = 50; i <= 100; i++) {
  // console.log(i);
}

let sum = 0;
for (let i = 11; i <= 20; i++) {
  sum = sum + i;
}
// console.log(sum);

// Practice
for (let i = 150; i <= 170; i++) {
  // console.log(i);
}
// let sum = 0;
for (let i = 31; i <= 58; i++) {
  // console.log(i);
  sum = sum + i;
}
// console.log(sum);

for (let i = 0; i <= 30; i++) {
  if (i % 2 == 1) {
    // console.log(i);
  }
}

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}
for (let i = 0; i < 20; i++) {
  if (i % 2 == 1) {
    // console.log(i);
  }
}

for (let i = 0; i <= 20; i = i + 2) {
  // console.log(i);
}

for (let i = 2; i < 20; i = i + 2) {
  // console.log(i);
}

for (let i = 2; i <= 20; i = i + 2) {
  // console.log(i)
}

for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0) {
    // console.log(i)
  }
}
for (let i = 0; i <= 30; i++) {
  if (i % 5 == 0 || i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    // console.log(i);
  }
}
for (let i = 40; i <= 80; i++) {
  if (i % 5 == 0 && i % 7 == 0) {
    // console.log(i);
  }
}
// let newSum = 0;
for (let i = 1; i <= 40; i++) {
  if (i % 13 == 0) {
    // console.log(i);
    // newSum = newSum + i;
  }
}
// console.log(newSum);

for (let i = 1; i <= 50; i = i + 4) {
  // console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 9 == 0 && i % 6 == 0) {
    // console.log(i);
  }
}
let newSum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 4 == 0) {
    // console.log(i);
    newSum = newSum + i;
  }
}
// console.log(newSum);

for (let i = 0; i < 15; i++) {
  // console.log(i);
  if (i >= 7) {
    break;
  }
}

for (let i = 0; i <= 10; i++) {
  if (i == 6) {
    continue;
  }
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  // console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  // console.log(i);
}

for (let i = 1; i < 30; i++) {
  if (i >= 15) {
    break;
  }
  // console.log(i);
}

for (let i = 1; i < 40; i++) {
  if (i % 7 == 0) {
    continue;
  }
  // console.log(i);
}

for (let i = 1; i < 15; i++) {
  if ((i == 9)) {
    continue;
  }
  // console.log(i);
}
