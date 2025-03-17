const student = {
  name: "Imran",
  age: 15,
  class: 10,
  isSingle: false,
};
// console.log(student.age)

const phone = {
  brand: "Apple",
  price: 80000,
  color: "Black",
  version: 20,
};
// console.log(phone);

const juice = {
  name: "Green Mango",
  price: 100,
  sugar: false,
};
// console.log(juice);

const car = {
  brand: "BMW",
  wheels: 4,
  maxSpeed: 100,
  ac: true,
};
// console.log(car);
const subject = {
  name: "Biology",
  teacher: "Rasheda",
  examDate: "30 Dec",
  chapters: ["first", "second", "third"],
  nextExam: {
    name: "Final Exam",
    marks: 100,
  },
};
// console.log(subject);

const teacher = {
  name: "Raki",
  subject: "Biology",
  age: 40,
  adress: "Nabiganj",
};
// console.log(teacher);

const tree = {
  typeTree: "Mango Tree",
  hight: 4,
  age: 10,
  frotName: "Mango",
};
// console.log(tree);

const animale = {
  name: "Gorilla",
  age: 2,
  color: "Black",
};
// console.log(animale);

const father = {
  name: "Kazol Miah",
  occupation: "Farmer",
  age: 60,
};

const motorbike = {
  brand: "Hero",
  tayer: 2,
  color: "Black",
  speed: 200,
  price: 100000,
};
// console.log(motorbike);

const bird = {
  name: "Eagle",
  color: "Black",
};
// console.log(bird);

const laptop = {
  brand: "Dell",
  ramPrice: 1500,
  procecor: "China",
  displaySize: "14",
};
// console.log(laptop);

const person = {
  name: "Sodor Uddin",
  age: "25",
  profession: "Developer",
  salary: 25000,
  married: true,
};
// console.log(person.profession);

const newPerson = {
  name: "Sodor Uddin",
  age: "25",
  profession: "Developer",
  salary: 25000,
  married: true,
  "fav places": ["Bandarban", "Saintmartin", "Kuakata"],
};
// console.log(newPerson["married"]);
// console.log(newPerson["fav places"]);

const cricketer = {
  position: 4,
  specialty: "Batter",
  age: 24,
  runs: 800,
};
// console.log(cricketer.runs)
cricketer.position = 1;
cricketer.runs = 900;
// console.log(cricketer.runs);

const college = {
  name: "VNC",
  class: ["11", "12"],
  events: ["Science Fair", "Bijoy Dibos", "21 Feb"],
  unique: {
    color: "Blue",
    result: {
      gpa: 5,
      merit: "Top",
    },
  },
};
// console.log(college.unique.color);
// Practice
const player = {
  name: "Messi",
  age: 50,
  sports: "Football",
  team: "Afa",
};
// console.log(player.team);
const newLaptop = {
  brand: "Dell",
  price: 20000,
  hardDisc: "500GB",
  ram: "4GB",
  screenSize: "18 inc",
};
// console.log(newLaptop.screenSize);
const favPlace = {
  name: "Coxs Bazar",
  distance: "400km",
  popularity: "High",
};
// console.log(favPlace["popularity"]);
const newPhone = {
  brand: "Nokia",
  color: "Black",
  price: "5000",
};
// console.log(newPhone["price"]);

const library = {
  name: "Public Library",
  location: "Dhaka",
  book: "5000",
};
// console.log(library.location);

const movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9,
};
// console.log(movie["rating"]);
const newCollege = {
  name: "ndc",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};
// console.log(newCollege.groups[1]);

const family = {
  father: {
    name: "Kazol Miah",
    age: 70,
    profession: "Farmer",
    mother: {
      name: "Rabiya Khatun",
      age: 60,
    },
  },
};
const twoAge = family.father.age + family.father.mother.age;
console.log(twoAge);
