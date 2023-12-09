function calc(a, b) {
  return a + b;
}

const a = 3;
let logFn = (a) => {
  return a + 3;
};
console.log(logFn(a));

document.getElementById("btn").addEventListener("click", () => {
  console.log("点击按钮了", logFn(a));
});

module.exports = {
  logFn,
};
