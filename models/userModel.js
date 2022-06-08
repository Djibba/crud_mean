const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: {
        type: String,
        required: [true, "most provide name"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "most provide name"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "most provide name"],
    }
})

module.exports = mongoose.model("user", user);