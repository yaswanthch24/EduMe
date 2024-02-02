var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
let cors = require("cors");
app.use(cors());

app.use("/", require("./Home"));
app.use("/fetch", require("./Fetch"));
app.use("/login", require("./login"));
app.use("/register", require("./Register"));
app.use("/update", require("./Update"));
app.use("/deleted", require("./Delete"));
app.use("/updatepassword", require("./forgetpassword"))

app.listen(3001)
console.log("hii started server 3001");