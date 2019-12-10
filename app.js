const express = require('express');
const routes = require('./routes/index');

// Create our Express app.
const app = express();

// Routes are handled in ./routes/index.js file.
app.use('/', routes);

// Export app, we can start the app in start.js file.
module.exports = app;