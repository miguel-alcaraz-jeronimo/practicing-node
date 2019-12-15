const app = require('./app');

// Import all of our models.
require('./models/model');

// Set port.
app.set('port', process.env.PORT || 3000);

// Start our app.
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})