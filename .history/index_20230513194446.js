const express =require("express");
const path = require("path");
const publicPath = path.join(__dirname, "views");
const app = express();
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.use(express.static(publicPath));
app.get("/signup", (req, res) => {
    res.render("sing-up-client.html");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });
  