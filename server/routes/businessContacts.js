let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/businessContacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET users listing. */
router.get('/', contactController.displayContactList);

/* GET route for displaying the AddBusinessContact page */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST route for adding a business contact */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET route for Delete confimration page */
router.get('/confirm-delete/:id', requireAuth, contactController.displayDeleteConfirmPage);

/* GET route for Delete */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;