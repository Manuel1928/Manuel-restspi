const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/VideoGames', controllers.createVideoGames);
router.get('/VideoGames', controllers.getAllVideoGames);

module.exports = router;