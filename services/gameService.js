const Game = require('../models/Game');


exports.getAll = () => Game.find();

exports.create = (gameData) => Game.create(gameData);

exports.getById = (gameId) => Game.findById(gameId);

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.edit = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.isBuyer = async (gameId, userId) => {
    const game = await Game.findById(gameId);
    return game.boughtBy.includes(userId);
};

exports.buy = async (gameId, userId) => {
    const game = await Game.findById(gameId);
    game.boughtBy.push(userId);
    game.save();
};