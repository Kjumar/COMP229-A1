var express = require('express');
var router = express.Router();

// the Home page
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home'});
});

// the About Me page
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Me'});
});

// the Projects page
router.get('/projects', function(re, res, next) {
  res.render('projects', {title: 'My Projects'});
});

// the Services page
router.get('/services', function(re, res, next) {
  res.render('services', {title: 'My Services'});
});

// the Contact Me page
router.get('/contact', function(re, res, next) {
  res.render('contact', {
      title: 'Contact Me',
      email: 'jganguli@hotmail.ca',
      phoneNum: '(+1) 289-244-5680'
  });
});

module.exports = router;
