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
