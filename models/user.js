const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://saadmumtaz619_db_user:<db_password>@cluster0backend.rym80s7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Backend");

const userSchema = mongoose.Schema({
    image:String,
    email:String,
    name:String
})
 module.exports=mongoose.model('user',userSchema);
