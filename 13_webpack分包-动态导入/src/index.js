import axios from "axios";

const message = "hello index";
console.log(message);

function foo() {
  console.log("fool fn");
}
foo();

axios.get("http://123.207.32.32:8000/lyric?id=1842025914a").then((res) => {
  console.log(res);
});
