const express = require("express")
const mongoose = require("mongoose")

const app = express();
const port =8080;

//mongo connection
const url = "mongodb://localhost/newDB"
mongoose.connect(url,{useNewUrlParser:true}) // for connecting mongodb
const con = mongoose.connection; //for connection 

con.on('open',function(){
    console.log('Mongdb Connected...'); //for checking connection 
})
//for using json in format in app
app.use(express.json())
//Routers
const alienRouter = require('./Routes/aliens')
app.use('/aliens',alienRouter); 

app.get('/',(req,res)=>{
    console.log('Hello crud')
    res.send('<h1>Hello crud</h1>')
})

app.listen(9000,()=>{
    console.log('Sever started..')
    
})