const _ = require('the-lodash');

module.exports = ({router, app, logger, context}) => {

    router.get('/test', function (req, res) {
        res.send({ foo: 'bar'});
    })

    app.use('/api', router);
};