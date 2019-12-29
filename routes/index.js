const express = require('express');
const router = express.Router();

const nodeController = require('../controllers/nodeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Root.
router.get('/', nodeController.homePageMiddleware, nodeController.homePage);

// Add
router.get('/add', nodeController.addModel);
router.post('/add', catchErrors(nodeController.createModel));

// Reverse.
router.get('/reverse/:name', (req, res) => {
    console.log('on /reverse route');

    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

// Export routes, we can import this file in app.js file.
module.exports = router;