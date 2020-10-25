let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let passport = require('passport');

// define User model instance
let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title:'Home', displayName: req.user ? req.user.displayName : ''});
};

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {title:'About Me', displayName: req.user ? req.user.displayName : ''});
};

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title:'My Projects', displayName: req.user ? req.user.displayName : ''});
};

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title:'My Services', displayName: req.user ? req.user.displayName : ''});
};

module.exports.displayContactMePage = (req, res, next) => {
    res.render('contact', {
        title: 'Contact Me',
        email: 'jganguli@hotmail.ca',
        phoneNum: '(+1) 289-244-5680',
        displayName: req.user ? req.user.displayName : ''
    });
};

module.exports.displayLoginPage = (req, res, next) => {
    // check if user is already logged in
    if (!req.user)
    {
        res.render('auth/login',
        {
            title: 'Log In',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
};

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // server err?
        if (err)
        {
            return next(err);
        }
        // is there a user login error?
        if (!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error
            if (err)
            {
                return next(err);
            }
            return res.redirect('/business-contacts');
        });
    })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is logged in
    if (!req.user)
    {
        res.render('auth/register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
};

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });
    User.register(newUser, req.body.password, (err) => {
        if (err)
        {
            console.log("Error: Inserting new User");
            if (err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists');
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user? req.user.displayName : ''
            });
        }
        else
        {
            // if no error exists, then registration is successful
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business-contacts');
            });
        }
    });
};

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
};