const express = require('express');
const router = express.Router();

// Root.
router.get('/', (req, res) => {
    console.log('on / route');

    /**
     * Request reference: https://expressjs.com/es/api.html#req
     * Response reference: https://expressjs.com/es/api.html#res
     */

    // Simple text formatted response.
    // res.send('on / route');

    // Responds with request query params.
    // res.json(req.query);

    res.render('index');

});

// Reverse.
router.get('/reverse/:name', (req, res) => {
    console.log('on /reverse route');

    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

// Export routes, we can import this file in app.js file.
module.exports = router;