const express = require('express');

const app = express();
app.use(function(req,res,next){
  console.log("hello bhayia");
  next();
});

app.get("/profile",(req,res) => {
  res.send("hello saad");
});

app.get("/",(req,res)=>{
  res.send("hello shayan")
});
app.listen(3000);