const users = [
  {
    name: "khaled",
    height: 170,
    gender: "male",
    mass: 53,
    eye_color: "black",
  },
  {
    name: "norah",
    height: 160,
    gender: "female",
    mass: 49,
    eye_color: "black",
  },
  {
    name: "ali",
    height: 199,
    gender: "male",
    mass: 55,
    eye_color: "blue",
  },
  {
    name: "sumting name",
    height: 300,
    gender: "male",
    mass: 200,
    eye_color: "blue",
  },
];
let names = users.map((a) => a.name);
let heights = users.map((b) => b.height);
console.log("____________The Names and height_______________");
// ======================= =========================
console.log("The names is: " + names + "\n" + "The heights is: " + heights);
console.log("____________The Names_______________");
// ======================= =========================
console.log("The first names is: " + names);
console.log("____________Get total mass _______________");
// ======================= =========================
console.log(users.reduce((n, { mass }) => n + mass, 0));
console.log("____________ Get total number _______________");
// ======================= =========================
let countNmae = [];
let totelName = "";
let totalCount = users.reduce((totalCount, users) => {
  countNmae.push(users.name);
  totelName = countNmae.join();
});
console.log(totelName.length);
console.log("____________ Get mass greater than 100 _______________");
// ======================= =========================
function massgreater(users) {
  return users.mass >= 100;
}
let filtered = users.filter(massgreater);
console.log(filtered);
console.log("____________ Get female _______________");
// ======================= =========================
function female(users) {
  return users.gender == "female";
}
let filteredmale = users.filter(female);
console.log(filteredmale);
console.log("____________Sort by name_______________");
// ======================= =========================
let sortName = users.sort(function (a, b) {
  return a.name - b.name;
});
console.log(sortName);
console.log("____________Sort by gender_______________");
// ======================= =========================
let sortgender = users.sort(function (a, b) {
  return a.gender - b.gender;
});
console.log(sortgender);
console.log("____________get only gender_______________");
// ======================= get only gender =========================
var result = users.map((x) => x["gender"]);
console.log(result);
console.log("____________has blue eyes?_______________");
// ======================= =========================
let resultEye = users.every((e) => e.eye_color === "blue");
console.log(resultEye);
console.log("____________every character male? _______________");
// ======================= =========================
let resultmale = users.every((u) => u.gender === "male");
console.log(resultmale);
console.log("____________one male _______________");
// ======================= =========================
let onemale = users.some((e) => e.gender === `male`);
console.log(onemale);
console.log("____________mass less than 50 _______________");
// ======================= =========================
let messThan = users.some((e) => e.mass < 50);
console.log(messThan);
