const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String, 
        required: true
    },
    name:{
        type: String, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

// Users will look for users Collection into the DB called Users
const User = mongoose.model('User', userSchema)
module.exports = User