const mongoose = require('mongoose')

async function connecttoDb(){
    await mongoose.connect(process.env.MONODB_KEY)
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch(err=>{
        console.log("Error connecting to the database")
    })
}

module.exports = connecttoDb