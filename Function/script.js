function fanOffKor() {
  console.log("Bosha theke uthe dara");
}
fanOffKor();

// Practice

function jusKhao() {
  console.log("Ai naw labur jus");
}
jusKhao();

function myRoutine() {
  console.log("1.Gum thki uti");
  console.log("2.Dat brash kori");
  console.log("3.Yektu doura douri kori");
}
myRoutine();

function myFamaly() {
  console.log("Ripon");
  console.log("Sumon");
  console.log("Rimon");
  console.log("Imran");
  console.log("Emlak");
}
myFamaly();

function taskDone() {
  console.log("Gume thake uti, gucol kori, kam kaj kori");
}
taskDone();
function greetME() {
  console.log("Good Morning! Have a great day");
}
greetME();
function getFavFriends() {
  console.log("Raju,Rakib,Dipu");
}
getFavFriends();
function introduceMyself() {
  console.log(
    "Name:Imran, Age:21, Adress:Nabiganj, Mobile:01775283801, Hight:5.5, Fav:Biriyani"
  );
}
introduceMyself();

function doubleIt(number) {
  const double = number * 2;
  console.log(double);
}
doubleIt(4);
doubleIt(10);
doubleIt(20);

function square(number) {
  const borgo = number * number;
  console.log("Square of", number, "is:", borgo);
}
square(5);
square(10);

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(11, 12);

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(total);
}
addAll(1, 2, 3, 4, 5);

function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(num1, num2, "Difference is: ", diff);
}
const fatherAge = 40;
const myAge = 20;
difference(fatherAge, myAge);

function addNumbers(a, b) {
  return a + b;
}
const result = addNumbers(2, 4);
console.log(result);

function addNewNumbers(a, b) {
  console.log(arguments);
  return a + b;
}
const resultNew = addNewNumbers(5, 6, 7, 8);
console.log(result);

// Practice
function sonFather(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
const fatherAgeNew = 70;
const myAgeNew = 30;
sonFather(fatherAgeNew, myAgeNew);

function numberGunKora(num1, num2) {
  const sum = num1 * num2;
  console.log(sum);
}
numberGunKora(20, 15);

function threeSubject(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  console.log(sum);
}
threeSubject(10, 20, 30);

function myRealAge(num1, num2) {
  const sum = num1 - num2;
  console.log("My age: ", sum);
}
const nowYear = 2025;
const myBirthdayYear = 2001;
myRealAge(nowYear, myBirthdayYear);

function lowKhinbo(tk) {
  const lawPabo = tk / 35;
  console.log(lawPabo);
}
lowKhinbo(70);

function chartiSonkarGor(a, b, c, d) {
  const jugFol = a + b + c + d;
  const gor = jugFol / 4;
  console.log(gor);
}
chartiSonkarGor(10, 10, 10, 10);
function sell(buyPrice) {
  const sellingPrice = buyPrice + 250;
  console.log(sellingPrice);
}
sell(400);

function handetYears(myBirthdayYears) {
  const handetYears = myBirthdayYears + 100;
  console.log(handetYears);
}
handetYears(2001);

function oneDayMobileUse(mobileUse) {
  const oneDayMobileUse = mobileUse * 30;
  console.log(oneDayMobileUse);
}
oneDayMobileUse(5);

function tenTimes(number) {
  const result = number * 10;
  return result;
}
const output = tenTimes(5);
console.log(output);

function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
const bill = add(50, 60);
console.log(bill);
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(20));

// Practice
function newNum(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(newNum(21));

function newNum1(num) {
  if (num % 13 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(newNum1(13));

function allPrice(price1, price2, price3) {
  return price1 + price2 + price3;
}
const rice = 300;
const curry = 90;
const drink = 25;
const payBil = allPrice(rice, curry, drink);
console.log(payBil);

function isVoter(isVoterAge) {
  if (isVoterAge >= 18) {
    return "Eligible for voting";
  } else {
    return "Not Eligible";
  }
}
console.log(isVoter(18));
function stringLan(str) {
  return str.length;
}
const stringLanNumber = stringLan("Fayjul Islam Al Imran");
console.log(stringLanNumber);

function thareNum(num1, num2, num3) {
  const allNum = num1 + num2 + num3;
  return allNum / 3;
}
const resultUpdate = thareNum(10, 20, 30);
console.log(resultUpdate);

function soilWell() {
  const soilLength = 20;
  const soilWidth = 60;
  const soilHeight = 10;
  const soilArea = soilLength * soilWidth * soilHeight;
  const allSoilWell = soilArea / 243;
  const oneSoilWellPrice = 1500;
  const allSoileWellPrice = allSoilWell * oneSoilWellPrice;
  return allSoilWell.toFixed(2), allSoileWellPrice.parseInt;
}
console.log(soilWell());

function evenSizedString(str) {
  console.log(str);
}
evenSizedString("Dhaka");

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
}
evenSizedString("Dhaka");

function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    console.log("Even Size");
  } else {
    console.log("Odd Size");
  }
}
evenSizedString("Sylhet");

function evenSizedString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const isEven = evenSizedString("Imran");
console.log(isEven);

function doDleOrTriple(num, doDouble) {
  if (doDouble === true) {
    const result = num * 2;
    return result;
  } else {
    const result = num * 3;
    return result;
  }
}
console.log(doDleOrTriple(5, true));


function numberOfElement(nums) {
  const len = nums.length;
  return len;
}
const len = numberOfElement([12, 45, 78, 45, 121, 254, 4, 5]);
console.log(len);

// Practice

function myFun(str) {
  const size = str.length;
  if (size % 2 == 0) {
    return "Jur";
  } else {
    return "Bijur";
  }
}
const newLen = myFun([1, 2, 3, 4, 5, 6, 7, 7]);
console.log(newLen);

function getFirstLetter(name) {
  return name.charAt(0);
}
console.log(getFirstLetter("Imran"));

function tenGun(setNumber) {
  if (setNumber > 10) {
    const result = setNumber / 10;
    return result;
  } else {
    const result = setNumber * 10;
    return result;
  }
}
console.log(tenGun(5));
