import axios from "axios";
import React from "react";
const message = "hello index";
console.log(message);

import { bal } from "./utils/bal";
import { fool } from "./utils/foo";

function bar() {
  console.log("bar fn");
}
bar();

bal();
fool();

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
  import(
    /* webpackChunkName: "about" */
    /* webpackPrefetch: true */
    "./router/about"
  ).then((res) => {
    res.about();
  });
};

btn2.onclick = function () {
  import(
    /* webpackChunkName: "category" */
    /* webpackPrefetch: true */
    "./router/category"
  );
};
