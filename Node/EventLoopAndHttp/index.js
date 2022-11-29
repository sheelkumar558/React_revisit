//
console.log("run 1");
setTimeout(() => {
  console.log("run 2");
}, 0);
console.log("run 3");

//

const express = require("express");

const app = express();

app.get("", (req, res) => {
  console.log("hello users");
  res.send("hello users client");
});

app.listen(8080, () => {
  console.log(`runining port 8080`);
});
