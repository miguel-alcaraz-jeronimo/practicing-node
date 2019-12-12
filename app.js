const path = require('path');
const express = require('express');

const routes = require('./routes/index');
const helpers = require('./helpers');

// Create our Express app.
const app = express();

// Template engine setup: https://expressjs.com/es/guide/using-template-engines.html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Pass variables to all request.
app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
})

// Routes are handled in ./routes/index.js file.
app.use('/', routes);

// Export app, we can start the app in start.js file.
module.exports = app;