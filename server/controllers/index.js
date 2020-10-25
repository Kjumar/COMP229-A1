let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title:'Home'});
};

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {title:'About Me'});
};

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title:'My Projects'});
};

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title:'My Services'});
};

module.exports.displayContactMePage = (req, res, next) => {
    res.render('contact', {
        title: 'Contact Me',
        email: 'jganguli@hotmail.ca',
        phoneNum: '(+1) 289-244-5680'
    });
};

module.exports.displayLoginPage = (req, res, next) => {
    res.render('index', {title:'Log In'});
};