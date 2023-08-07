const Game = require('../models/Game');


exports.getAll = () => Game.find();

exports.create = (gameData) => Game.create(gameData);
