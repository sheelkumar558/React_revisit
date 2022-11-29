const express = require("express");

// const logger = (req, res, next) => {
//   if (req.path == "/users") {
//     req.role = "users";
//   } else if (req.path == "/students") {
//     req.role = "students";
//   } else {
//     req.role = "somthing";
//   }
//   console.log("before route handler");
//   next();
//   //   console.log("after route handler");
// };
// const user = (req, res, next) => {
//   console.log("before route handler user");
//   next();
//   console.log("after route handler user");
// };
const app = express();
//app.use(logger);
app.get("/users", loggedId("seller"), (req, res) => {
  return res.send({ route: "/users", role: req.role });
});

function loggedId(selller) {
  return function logger(req, res, next) {
    if (selller === "seller") {
      return next();
    }
    return res.send("Not allowed");
  };
}

// app.get("", (req, res) => {
//   return res.send({ route: "home", role: req.role });
// });
// app.get("/students", (req, res) => {
//   return res.send({ route: "/students", role: req.role });
// });

app.listen(5000, () => {
  console.log(`runining port 5000`);
});
