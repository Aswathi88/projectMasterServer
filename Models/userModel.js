const mongoose=require('mongoose')

//schema

const userScheme=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    gitHub:{
        type:String

    },
    linkedIn:{
        type:String
    },
    profile:{
        type:String
        
    }
})

//model

const users=mongoose.model("users",userScheme)

module.exports=users
