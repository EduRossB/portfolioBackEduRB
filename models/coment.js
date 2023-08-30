const mongoose = require('mongoose')

const comentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 45 
    },
    coment: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250        
    }
})

const Coment = mongoose.model('Coment', comentSchema);

module.exports = Coment