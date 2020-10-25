let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let ContactInfo = require('../models/contactInfo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ContactInfo.find((err, contactList) => {
      if(err)
      {
          return console.error(err);
      }
      else
      {
          // console.log(ContactList);
          res.render('businessContact/list',{
              title: "Business Contacts",
              ContactList: contactList
          });
      }
  });
});

/* GET route for displaying the AddBusinessContact page */
router.get('/add', (req, res, next) => {
    res.render('businessContact/add', {title: 'Add Business Contact'})
});

/* POST route for adding a business contact */
router.post('/add', (req, res, next) => {
    let newContact = ContactInfo({
        "name": req.body.name,
        "number": req.body.contactNumber,
        "email": req.body.email
    });

    ContactInfo.create(newContact, (err, ContactInfo) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh booklist
            res.redirect('/business-contacts');
        }
    });
});

/* GET route for Delete confimration page */
router.get('/confirm-delete/:id', (req, res, next) => {
    let id = req.params.id;

    ContactInfo.findById(id, (err, contactObject) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // delete contact info
            res.render('businessContact/confirm-delete',{
                title: "Confirm Delete Action",
                contact: contactObject
            });
        }
    });
});

/* GET route for Delete */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    ContactInfo.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // delete contact info
            res.redirect('/business-contacts');
        }
    });
});

module.exports = router;