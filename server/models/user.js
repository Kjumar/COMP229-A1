// ============================
// user.js
// Jay Ganguli
// Student#: 301164583
// 2020-10-25
// ============================

let mongoose = require('mongoose');

let userModel = mongoose.Schema({
    username: String,
    password: String,
    email: String
},
{
    collection: "users"
});

module.exports = mongoose.model('User', userModel);