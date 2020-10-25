// ============================
// user.js
// Jay Ganguli
// Student#: 301164583
// 2020-10-25
// ============================

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userModel = mongoose.Schema({
    username:
    {
        type: String,
        default: "",
        trim: true,
        required: "username is required"
    },
    /*
    password:
    {
        type: String,
        default: "",
        trim: true,
        require: 'password is required'
    },
    */
    email:
    {
        type: String,
        default: "",
        trim: true,
        required: "email address is required"
    },
    displayName:
    {
        type: String,
        default: "",
        trim: true,
        required: "email address is required"
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    update:
    {
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
});

// configure options
let options = ({missingPassworderror: 'Wrong / Missing Password'});

userModel.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", userModel);