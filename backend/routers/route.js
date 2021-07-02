const express=require('express');
const  jwt= require('jsonwebtoken');
const routers=express.Router();
const cookie=require('cookie-parser');
const Users=require('../Db/models');
// const jwt=require()
const middleware=(req,res,next)=>{
    next();
}
routers.use(cookie());
routers.post('/login',async(req,res)=>{
    try {
    const {name,password}= await req.body;
    if(!name || !password){
        res.status(401).send('Invalid Authentication');
    }
    const data=await Users.findOne({name});
    if(data!==null && data.password===password){
        const token=await data.generateToken();
        res.cookie("jwt",token,{
                expires:new Date(Date.now()+1234564778787879),
                httpOnly:true
            })
        console.log(token);
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
        // console.log(resp._id);
        if(resp){
            const token=await user.generateToken();
            console.log(token);
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+1234564778787879),
                httpOnly:true
            })
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
routers.get('/signout',async(req,res)=>{
    try {
        const token=await req.cookies.jwt;
        const user= await jwt.verify(token,"sadsadsaddsdwqewewqewqewedasfsfdsfsdffdsfdfdsdsf");
        console.log(user);
        const data =await Users.findOne({_id:user._id});
        data.tokens=data.tokens.filter((ele)=>{
            return ele.token!==token;
        })
        res.clearCookie("jwt");
        await data.save();
        return res.status(200).send("SignedOut Successfully");
    } catch (error) {
        console.log(error);
        return res.status(401).send("Some error occurred while signing out");
    }
})
routers.get('/create',(req,res)=>{
    res.send("Create Page");
});
routers.get('/join',(req,res)=>{
    res.send("Join Page");
});









module.exports=routers;