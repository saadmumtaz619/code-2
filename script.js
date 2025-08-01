const express= require('express');
const app=express();

const middleware=(req,res,next)=>{
  console.log("middleware execute");
  next();
};
app.get("/",(req,res)=>{
  res.send("hello saad");
})

app.get("/profile",(req,res)=>{
  res.send('hello shayan');
})
app.listen(3000);