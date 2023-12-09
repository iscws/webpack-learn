import axios from "axios";
const message = "hello index";
console.log(message);

function bar() {
  console.log("bar fn");
}
bar();

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");

btn1.textContent = "关于";
btn2.textContent = "分类";

document.body.append(btn1);
document.body.append(btn2);

btn1.onclick = function () {
  import(/* webpackChunkName: "about" */ "./router/about").then((res) => {
    res.about();
  });
};

btn2.onclick = function () {
  import(/* webpackChunkName: "category" */ "./router/category");
};
