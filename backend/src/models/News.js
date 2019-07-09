const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    body: String,
    image: String,
}, {
    timestamps: true,

})

module.exports = mongoose.model('News', NewsSchema);