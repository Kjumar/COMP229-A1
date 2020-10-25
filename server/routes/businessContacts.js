let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let ContactInfo = require('../models/contactInfo');

let contactController = require('../controllers/businessContacts');

/* GET users listing. */
router.get('/', contactController.displayContactList);

/* GET route for displaying the AddBusinessContact page */
router.get('/add', contactController.displayAddPage);

/* POST route for adding a business contact */
router.post('/add', contactController.processAddPage);

/* GET route for Delete confimration page */
router.get('/confirm-delete/:id', contactController.displayDeleteConfirmPage);

/* GET route for Delete */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;