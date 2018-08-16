var mongoose = require('mongoose'); 
var Player = mongoose.model('Player');

module.exports = {
    create: function(req, res) {
    var player = new Player({name : req.body.name, position : req.body.position});
        console.log(req.body)
       player.save(function(err) {
           if(err) {
                res.json(err);
            } else {
                res.json(player);
            }
        });
    },

    read: function(req, res) {
        Player.find({}, function(err, player) {
            if (err) {
                console.log(err);
            } else {
                res.json(player);
            }
        });
    },

   destroy: function(req, res) {
        Player.findOne({ _id: req.params.id }).remove(function(err, cancelled) {
            if (err) {
                console.log(err);
            } else {
                res.json(cancelled);
            }
        });
    }
};