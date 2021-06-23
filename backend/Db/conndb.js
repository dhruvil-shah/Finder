const mongoose=require('mongoose');
const db=mongoose.connect('mongodb+srv://dhruvilshah:dhruvil@cluster0.mgo37.mongodb.net/finderdb?retryWrites=true&w=majority',
{useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false})
.then(()=>{
    console.log('Connected Successfully Db');
}).catch((err)=>{
    console.log("Error in Db"+err);
})
module.exports=db;