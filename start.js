const app = require('./app');

// Set port.
app.set('port', process.env.PORT || 8080);

// Start our app.
const server = app.listen(app.get('port'), () => {
    console.log(`Express running -> PORT ${server.address().port}`);
})