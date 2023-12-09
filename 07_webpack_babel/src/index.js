function calc(a, b) {
  return a + b;
}

console.log(calc(3, 4));
console.log("hello whats up");

const a = 3;
let logFn = (a) => {
  return a + 3;
};
console.log(logFn(a));

document.getElementById("btn").addEventListener("click", () => {
  console.log(logFn(a));
});

module.exports = {
  logFn,
};
