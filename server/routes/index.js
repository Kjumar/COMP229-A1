let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

// the Home page
router.get('/', indexController.displayHomePage);

// the About Me page
router.get('/about', indexController.displayAboutPage);

// the Projects page
router.get('/projects', indexController.displayProjectsPage);

// the Services page
router.get('/services', indexController.displayServicesPage);

// the Contact Me page
router.get('/contact', indexController.displayContactMePage);

// the login page
router.get('/login', indexController.displayLoginPage);

router.post('/login', indexController.processLoginPage);

// the register page
router.get('/register', indexController.displayRegisterPage);

router.post('/register', indexController.processRegisterPage);

// GET perform logout
router.get('/logout', indexController.performLogout);

module.exports = router;
