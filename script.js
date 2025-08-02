const express= require('express');
const app=express();

app.set("view engine","ejs");
app.use(express.static('./public'));

app.get("/",function(req,res)
{res.render("index",{age:12});
});

app.get("/error",function(req,res,next){
    throw Error("something went wrong");
});
app.get("/contact",function(req,res)
{res.render("contact",{name:harsh});
});


app.use(app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
}))
app.listen(3000);