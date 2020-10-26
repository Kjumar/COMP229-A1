// ============================
// contactInfo.js
// Jay Ganguli
// Student#: 301164583
// 2020-10-25
// ============================

let mongoose = require("mongoose");

// create model class
let contactInfoModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "businessContacts"
});

module.exports = mongoose.model('ContactInfo', contactInfoModel);