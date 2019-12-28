const app = require('./app');
const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
    console.error(err.message);
});

// Import all of our models.
require('./models/model');

// Set port.
app.set('port', process.env.PORT || 3000);

// Start our app.
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});