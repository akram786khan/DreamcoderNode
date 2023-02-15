const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add an title']
    },
    dis: {
        type: String,
        required: [true, 'Please add an discription']
    },
    price: {
        type: Number,
        required: [true, 'Please add an price']
    },
    quentity: {
        type: Number,
        required: [true, 'Please add an quentity']
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('products', UserSchema);
