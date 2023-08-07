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

module.exports = router;