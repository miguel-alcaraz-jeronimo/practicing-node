const express = require('express');
const router = express.Router();

const nodeController = require('../controllers/nodeController');

// Root.
router.get('/', nodeController.homePage);

// Reverse.
router.get('/reverse/:name', (req, res) => {
    console.log('on /reverse route');

    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

// Export routes, we can import this file in app.js file.
module.exports = router;