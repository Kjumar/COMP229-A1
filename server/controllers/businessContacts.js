let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let ContactInfo = require('../models/contactInfo');

module.exports.displayContactList = (req, res, next) => {
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
                ContactList: contactList,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    })
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('businessContact/add', {title: 'Add Business Contact', displayName: req.user ? req.user.displayName : ''})
};

module.exports.processAddPage = (req, res, next) => {
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
};

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    ContactInfo.findById(id, (err, contactObject) => {
        if (err)
        {
            return console.log(err);
        }
        else
        {
            res.render('businessContact/update', {
                title: 'Update Contact',
                contact: contactObject,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
};

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = ContactInfo({
        "_id": id,
        "name": req.body.name,
        "number": req.body.contactNumber,
        "email": req.body.email
    });

    ContactInfo.updateOne({_id: id}, updatedContact, (err) => {
        if (err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect('/business-contacts');
        }
    });
};

module.exports.displayDeleteConfirmPage = (req, res, next) => {
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
                contact: contactObject,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
};

module.exports.performDelete = (req, res, next) => {
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
};