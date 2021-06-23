const mongoose=require('mongoose');
const schema =mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
});

const Users=mongoose.model("users",schema);
module.exports=Users;
