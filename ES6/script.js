const money = 25;
// money = 50;
// console.log(money);
const rich = money + 25;
console.log(rich);
const numbers = [23, 4, 23, 12, 56];
numbers[1] = 24;
numbers.push(10, 20, 30);
console.log(numbers);

const student = {
  name: "Fayjul",
  class: 12,
};
student.name = "Imran";
console.log(student);

/*function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
const sum = add(5);
console.log(sum);*/

function add(num1, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
const sum = add(3);
console.log(sum);

function createUser(name = "", education = {}, age = 0, hobbies = []) {}
