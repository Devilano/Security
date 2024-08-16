const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        required : true,
    },
    lastName:{
        type:String,
        required :true,
    },
    age:{
        type:String,
        required :true,
    },
    address:{
        type:String,
        required :true,
    },
    party:{
        type:String,
        required :true,
    },
    citizenno:{
        type:String,
        required :true,
    },
    email:{
        type:String,
        required :true,

    },
    password:{
        type:String,
        required :true,

    },
    isAdmin:{
        type: Boolean,
        default : false

    },
    


})

const User = mongoose.model('users', userSchema)
module.exports = User;
