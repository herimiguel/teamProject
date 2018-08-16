var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    
   name: {type: String},

    positiion: {type: String},

    
}, {timestamps: true });
mongoose.model('Player', PlayerSchema);