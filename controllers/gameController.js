const router = require('express').Router();
const gameService = require('../services/gameService');
const { isLogged } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/catalog', async (req, res) => {
    try {
        const allGames = await gameService.getAll().lean();

        res.render('games/catalog', { allGames });

    } catch (error) {
        res.status(404).render('/', { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/details', async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const userId = req.user._id;
        const selectedGame = await gameService.getById(gameId).lean();

        const isOwner = userId == selectedGame.owner;
        const isBuyer = await gameService.isBuyer(gameId, userId);

        res.render('games/details', { selectedGame, isOwner, isBuyer });
    } catch (error) {
        res.status(404).render('/games/catalog', { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/edit', isLogged, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const selectedGame = await gameService.getById(gameId).lean();

        res.render('games/edit', { selectedGame });

    } catch (error) {
        res.render(`games/${gameId}/edit`, { error: getErrorMessage(error) });
    }
});

router.post('/:gameId/edit', isLogged, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const gameData = req.body;

        await gameService.edit(gameId, gameData);
        res.redirect(`/games/${gameId}/details`);

    } catch (error) {
        res.render(`/games/${gameId}/details`, { error: getErrorMessage(error) });
    }

});

router.get('/:gameId/delete', isLogged, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        await gameService.delete(gameId);

        res.redirect('/games/catalog');
    } catch (error) {
        res.status(401).render(`games/${gameId}/details`, { error: getErrorMessage(error) });
    }
});

router.get('/:gameId/buy', isLogged, async (req, res) => {
    try {
        const gameId = req.params.gameId;
        const userId = req.user._id;

        await gameService.buy(gameId, userId);
        res.redirect(`/games/${gameId}/details`);

    } catch (error) {
        res.render(`games/${gameId}/details`, { error: getErrorMessage(error) });
    }
});

router.get('/create-offer', isLogged, async (req, res) => {
    res.render('games/create');
});

router.post('/create-offer', isLogged, async (req, res) => {
    try {
        const ownerId = req.user._id;
        const gameData = { ...req.body, owner: ownerId };

        await gameService.create(gameData);
        res.redirect('/games/catalog');

    } catch (error) {
        res.status(400).render('games/create-offer', { error: getErrorMessage(error) });
    }
});

router.get('/search', async (req, res) => {

    try {
        const result = await gameService.getAll().lean()

        res.render('games/search', { result });

    } catch (error) {
        res.status(400).render('games/search', { error: getErrorMessage(error) });
    }
});

router.post('/search', async (req, res) => {

    try {
        const { name, platform } = req.body;

        const result = await gameService.search(name, platform);

        res.render('games/search', { result });

    } catch (error) {

    }
});

module.exports = router;