const mongoose = require ('mongoose');

const progressSchema = new mongoose.Schema({
    newsTitle :{
        type :String,
        required :true,
        trim: true,
    },
    sourceFrom : {
        type : String,
        required : true,
        trim: true,

    },
    publisher : {
        type : String,
        required : true,
        trim : true,

    },
    date : {
        type : Date,
        required : true,
        

    },
   
    newsImageUrl : {
        type : String,
        required : true,

    },
})

const Progress = mongoose.model('Progress',progressSchema);

module.exports =Progress;