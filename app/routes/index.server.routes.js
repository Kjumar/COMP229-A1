module.exports = function(app)
{
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);

    // this is just a test route for now
    app.get('/info', (req, res) => {
        res.send('Site Info');
    });
};