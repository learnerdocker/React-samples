/* const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(process.env.port || 3000);
console.log("Web Server is listening at port " + (process.env.port || 3000)); */

const express = require("express");
const app = express();
const router = express.Router();

const PORT = 3001;

//#region "RegisterUSER" API
router.get("/registerUser", (req, res) => {
  const requestData = req.body;

  if (!requestData.username) {
    res.send({
      message: "Username doesn not exists in your request",
      code: 20,
    });
  }

  if (requestData.username && requestData.username.length < 5) {
    res.send({ message: "Username is too short", code: 21 });
  }
});
//#endregion

// const isUserValid = (name) =>
// {
//   return true;
// }

router.get("/home", (req, res) => {
  res.send("Hello World, This is home router");
});

router.get("/profile", (req, res) => {
  res.send("Hello World, This is profile router");
});

router.get("/login", (req, res) => {
  res.send("Hello World, This is login router");
});

router.get("/logout", (req, res) => {
  res.send("Hello World, This is logout router");
});

app.use("/", router);

app.listen(process.env.port || PORT);

console.log("Web Server is listening at port " + (process.env.port || PORT));
