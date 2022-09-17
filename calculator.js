const express = require("express")
const bodyParser = require("body-parser");


const app = express()
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html")

});
app.post("/", function(req,res){
var num1 =  Number(req.body.n1);
var num2 = Number(req.body.n2);
var result = num1 + num2;

    res.send("The result is  " + result)
});

app.get("/BMIcalculator",function(req,res){
    res.sendFile(__dirname + "/BMIcalculator.html")
});
app.post("/BMIcalculator", function(req,res){
  var weight =parseFloat( req.body.w);
  var height = parseFloat( req.body.h);

  var bmi = weight / height *height;
  res.send("Total bmi is " + bmi)
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});