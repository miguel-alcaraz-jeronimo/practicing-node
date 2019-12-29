const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers')

// Create our Express app.
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Template engine setup: https://expressjs.com/es/guide/using-template-engines.html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

/* The flash middleware let's us use req.flash('error', 'Shit!'),
which will then pass that message to the next page the user requests */
app.use(flash());

// Pass variables to all request.
app.use((req, res, next) => {
    res.locals.h = helpers;
    res.locals.flashes = req.flash();
    next();
})

// Routes are handled in ./routes/index.js file.
app.use('/', routes);

// Error Handler middleware.
app.use(errorHandlers.notFound);
app.use(errorHandlers.developmentErrors);

// Export app, we can start the app in start.js file.
module.exports = app;