const express= require('express');
const app= express();
const userModel =require("./usermodel")


app.get('/',(req,res)=>{
    res.send("hello i am here")
})


app.get('/create',async (req,res)=>{
   let createduser= await userModel.create({
        name:"harash",
        email:"harash@gmail.com",
        username:"harash"

    })
    res.send(createduser);
})

app.get('/create', async (req,res)=>{
     let createduser = await userModel.create({
        name:"harastia",
        email:"harastia@gmail.com",
        usrname:"harastia"
    })
    res.send(createduser);
})


app.get('/update',async (req,res)=>{
let updateduser=awaituserModel.findoneAndupdate({username:"harash"},{name:"harsh vandana"} ,{new:true})
res.send(createduser);
})

app.get('/read', async (req,res)=>{
    let users= await userModel.find({username:"harash"});
    res.send(users);
})

app.get('/delete', async (req,res)=>{
    let users = await userModel.findone({username:"harash"});
    res.send(users);
})


app.listen(3000);