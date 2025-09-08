const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://saadmumtaz619_db_user:BeACKkyIrSkvpOPy@cluster0backend.rym80s7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Backend`);
const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String,
})
mongoose.model("user",userSchema);