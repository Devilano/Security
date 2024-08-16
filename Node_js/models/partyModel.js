const mongoose = require ('mongoose');

const partySchema = new mongoose.Schema({
    personName :{
        type :String,
        required :true,
        trim: true,
    },
    personParty : {
        type : String,
        required : true,
        trim: true,

    },
    personPosition : {
        type : String,
        required : true,
        trim : true,

    },
    personRanking : {
        type : Number,
        required : true,
        

    },
    homeTown : {
        type : String,
        required : true,
        trim : true

    },
    lastelectedFrom : {
        type :String,
        required : true,
        trim : true

    },

    personImageUrl : {
        type : String,
        required : true,

    },
})

const Party = mongoose.model('Party',partySchema);

module.exports =Party;