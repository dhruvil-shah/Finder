const express=require('express');
const routers=express.Router();
const Users=require('../Db/models');

routers.post('/signup', async (req,res)=>{
    try {
        const {name,phone,password,cpassword}= await req.body;
        if(!name || !phone || !password || !cpassword){
            return res.status(401).send("Some Data not found");
        }
        const user=new Users({name,phone,password,cpassword});
        const resp=await user.save();
        if(resp){
            res.status(200).send("Registered Successfully");
        }else{
            res.status(401).send("Not Registered");
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports=routers;