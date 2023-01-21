let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const public = __dirname + "/public/";

console.log("Hello World");

app.use("/public", express.static(public));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  process.env['MESSAGE_STYLE'] === "uppercase" ? (
    res.json({ "message": "HELLO JSON" })
  ) : (
    res.json({ "message": "Hello json" })
  );
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ "time": req.time });
});

app.get("/:word/echo", (req, res) => {
  res.json({ "echo": req.params.word });
});

app.get("/name", (req, res) => {
  const name = `${req.query.first} ${req.query.last}`;
  res.json({ "name": name });
})

app.post("/name", (req, res) => {
  const name = `${req.body.first} ${req.body.last}`;
  res.json({ "name": name });
});