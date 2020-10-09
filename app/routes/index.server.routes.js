module.exports = function(app)
{
    
    //var index = require('../controllers/index.server.controller');
    //app.get('/', index.render);

    // the Home page
    app.get('/', function(req, res) {
        res.render('index', {title: 'Home'});
    });

    // the About Me page
    app.get('/about', function(req, res) {
        res.render('index', {title: 'About Me'});
    });

    // the Projects page
    app.get('/projects', function(re, res) {
        res.render('index', {title: 'My Projects'});
    })

    // the Services page
    app.get('/services', function(re, res) {
        res.render('index', {title: 'My Services'});
    })

    // the Contact Me page
    app.get('/contact', function(re, res) {
        res.render('index', {title: 'Contact Me'});
    })
};