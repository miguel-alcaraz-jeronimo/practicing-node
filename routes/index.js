const express = require('express');
const router = express.Router();

const nodeController = require('../controllers/nodeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Root
router.get('/', nodeController.homePageMiddleware, nodeController.homePage);

// Get Models
router.get('/models', catchErrors(nodeController.getModels));

// Edit Model
router.get('/models/:id/edit', catchErrors(nodeController.editModel));

// Add
router.get('/add', nodeController.addModel);
router.post('/add', catchErrors(nodeController.createModel));

//Update
router.post('/add/:id', catchErrors(nodeController.updateModel));

// Reverse
router.get('/reverse/:name', (req, res) => {
    console.log('on /reverse route');

    const reverse = [...req.params.name].reverse().join('');
    res.send(reverse);
});

// Export routes, we can import this file in app.js file.
module.exports = router;