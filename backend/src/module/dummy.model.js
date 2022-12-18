const mongoose = require('mongoose');

const dummySchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
});

const Dummy = mongoose.model('dummy', dummySchema);

module.exports = Dummy;