const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('./Db/conndb');
app.use(express.json());

app.use(require('./routers/route.js'));

app.listen('5000',()=>{
    console.log('connected successfully');
})