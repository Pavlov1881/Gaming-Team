const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
    },
    platform: {
        type: String,
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },
    boughtBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Game = mongoose.models('Game', gameSchema);

module.exporst = Game;