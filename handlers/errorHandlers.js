// http://expressjs.com/en/guide/error-handling.html#error-handling

// Not Found Error Handler
exports.notFound = (req, res, next) => {
    console.log('on not found error handler');

    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

// Development Error Handler
exports.developmentErrors = (err, req, res, next) => {
    console.log('on development error handler');

    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status,
        stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };
    res.status(err.status || 500);
    res.format({
        'text/html': () => { res.render('error', errorDetails); },
        'application/json': () => res.json(errorDetails)
    });
};