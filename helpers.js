// Parse, validate, manipulate, and display dates and times. https://momentjs.com/
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data.
exports.dump = (obj) => JSON.stringify(obj, null, 2)

// Navigation options array.
exports.navOptions = [
    { name: 'nav option 1' },
    { name: 'nav option 2' },
    { name: 'nav option 3' },
    { name: 'nav option 4' }
];

// Site name
exports.siteName = 'Practicing Node :=)';