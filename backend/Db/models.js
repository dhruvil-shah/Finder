const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }
    ]
});
 schema.methods.generateToken=async function(){
     try {    
    const token=await jwt.sign
    ({_id:this._id},"sadsadsaddsdwqewewqewqewedasfsfdsfsdffdsfdfdsdsf",{
        expiresIn:"10d",
    })
    this.tokens=await this.tokens.concat({token});
    await this.save();
    return token;
} catch (error) {
         console.log(error);
}
 }
const Users=mongoose.model("users",schema);
module.exports=Users;
