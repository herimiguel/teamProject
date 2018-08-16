var player = require('../controllers/players.js');
var path = require('path');

module.exports = function(app) {


    app.post('/api/player/create', function(req, res) {
        player.create(req, res);
        console.log('player.add route hit');
    });

   app.get('/api/player/read', function(req, res) {
        player.read(req, res);
        console.log('player.read route hit');
    });

   app.post('/api/player/update', function(req, res) {
        player.update(req, res);
        console.log('player.update route hit')
    })

   app.post('/api/player/destroy', function(req, res) {
        player.destroy(req, res);
        console.log('player.delete route hit');
    })

   app.all('*', function(req, res) {
        console.log('app.all hit - in routes.js')
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
  
};