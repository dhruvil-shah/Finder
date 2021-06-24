const express=require('express');
const routers=express.Router();
const Users=require('../Db/models');
// const jwt=require()
const middleware=(req,res,next)=>{
    next();
}
routers.post('/login',async(req,res)=>{
    try {
    const {name,password}= await req.body;
    if(!name || !password){
        res.status(401).send('Invalid Authentication');
    }
    const data=await Users.findOne({name});
    if(data.password===password){
        return res.status(200).send("Logged In");
    }else
    return res.status(401).send("Invalid Authentication");
} catch (error) {
      console.log(error);  
      return res.status(404).send("Error occurred");
}
})
routers.post('/signup', async (req,res)=>{
    try {
        const {name,phone,password,cpassword}= await req.body;
        if(!name || !phone || !password || !cpassword){
            return res.status(401).send("Some Data not found");
        }
        const user=new Users({name,phone,password,cpassword});
        const resp=await user.save();
        if(resp){
            return res.status(200).send("Registered Successfully");
        }else{
           return res.status(401).send("Not Registered");
        }
    } catch (error) {
        console.log(error);
        return res.status(404).send("Error occurred");
    }
})

routers.get('/home',middleware,(req,res)=>{
    console.log("Middleware");
    res.send("Home");
})
module.exports=routers;