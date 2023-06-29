const asyncHandler = require("express-async-handler");
const Schema = require("../model/modela");
const getAll = asyncHandler(async(req,res)=>{
    const all = await Schema.find();
    res.json(all);
})
const addNew = asyncHandler(async(req,res)=>{
    const {name,email} = req.body;
    console.log(name,email);
    if(!name || !email ){
        res.status(400);
        throw new Error("All Fields needed");
    }
    const value = await Schema.create({
        name,email,
    })
    res.status(201).json(value);
})

const getOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const data = await Schema.findById(id);
    res.status(201).json(data);  
});

const updateOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const update = await Schema.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json(update);
});

const deleteOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const del = await Schema.findByIdAndRemove(id);
    res.send(`Deleted data in ${id}`);
})
module.exports = {getAll,addNew,getOne,updateOne,deleteOne};