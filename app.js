const express= require('express');
const app= express();
const userModel =require("./usermodel")


app.get('/',(req,res)=>{
    res.send("hello i am here")
})


app.get('/create',(req,res)=>{
    userModel.create({
        name:"harash",
        email:"harash@gmail.com",
        username:"harash"

    })
    console.log("hey");
})
app.listen(3000);