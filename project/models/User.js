const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:string,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }

},{
    timestamps:true
});

module.exports = mongoose.model("User",userSchema);