const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Schema",schema);