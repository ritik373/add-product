const express=require('express');
const routes=express.Router();


routes.get('/shop',(req,res)=>{
    res.send("<h1> Hello from shop</h1>")
})

module.exports=routes;