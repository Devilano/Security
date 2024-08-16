const mongoose = require('mongoose')

//importing an7y necessary pacakges 

// function (Any)

const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(() =>{
        console.log("Connected to the Database Election")
    })
}

//export
module.exports= connectDB;