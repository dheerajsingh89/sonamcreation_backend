//we create package.json (node package) by 'npm init' with the entry point of server.js so here we are creating server.js
import express from "express";
import mongoose from 'mongoose';
import Cors from  'cors';
import ProductModel from "./ProductModel.js";
//app config
const app=express()
const port=process.env.PORT || 8001
const connection_url='mongodb+srv://Itsdheeraj:manumani123@cluster0.pmdakv8.mongodb.net/?retryWrites=true&w=majority';
//middlewares
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    UseUnifiedTopology:true
})
//API end points
app.get('/',(req,res)=>{
    res.status(200).send("hello world ")
})//get data is to get the data from database 
app.post("/contacts",(req,res)=>{
    const expen=req.body;
    ProductModel.create(expen,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})//post request is to add data into database
app.get("/contacts",(req,res)=>{
  ProductModel.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})//this is to download data from database
//Listener
app.listen(port,()=>console.log(`listening on port ${port}`))

