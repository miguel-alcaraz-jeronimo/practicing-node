const express = require('express');
const router = express.Router();

// Root.
router.get('/', (req, res) => {
    res.send('on / route');
});

// Export routes, we can import this file in app.js file.
module.exports = router;