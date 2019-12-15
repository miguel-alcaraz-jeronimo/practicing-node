exports.homePageMiddleware = (req, res, next) => {
    console.log('on homePage middkeware');
    
    req.query.name += ' :=)';
    next();
}

exports.homePage = (req, res) => {
    console.log('on homePage controller');

    /**
     * Request reference: https://expressjs.com/es/api.html#req
     * Response reference: https://expressjs.com/es/api.html#res
     */

    // Simple text formatted response.
    // res.send('on / route');

    // Responds with request query params.
    // res.json(req.query);

    res.render('index', {
        name: req.query.name
    });
}