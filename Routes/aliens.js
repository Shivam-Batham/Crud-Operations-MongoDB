const express = require('express')
const router = express.Router() //FOR Routes  may be middleware
const Alien = require('../model/alien')
const mongo = require('mongodb')
// Alien.createCollection();
router.get('/',async(req,res)=>{
    try{
        const aliens =await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
    
    // console.log('Aliens request')
    // res.send('<h1>Aliens get request</h1>')
})

//for one data retrieval
router.get('/:id',async(req,res)=>{
    try{
        const alien =await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
    
    // console.log('Aliens request')
    // res.send('<h1>Aliens get request</h1>')
})

router.post('/',async(req,res)=>{
    // console.log('post')
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })
    try{
        const entry =await alien.save();
        console.log(entry)
        res.json(entry);
    }catch(err){
        res.send("Error " + err)
    }
})

//Patch
router.patch('/:id',async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const entry =await alien.save()
        res.json(entry)
    }catch(err){
        res.send("ERROR "+err)
    } 
})
//Delete
router.delete('/:id',async (req,res)=>{
    try{
        // let id = req.params.id;
        const alien = await Alien.findByIdAndRemove(req.params.id)
        
        res.json(alien)
    }catch(err){
        res.send("ERROR "+err)
    } 
})

module.exports = router; 