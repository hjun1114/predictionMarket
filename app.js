var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.use(express.static("public")); // for asset files - use public directory

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/", function(req, res){
  res.render("show");
});

app.get("/feedback", function(req, res){
  res.render("feedback");
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Server has started");
});
