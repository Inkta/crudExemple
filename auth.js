var jwt = require("jwt-simple");
var config = require("./config");

module.exports = function (req, res, next) {
    console.log(req.he);
    if (req.headers['x-auth']) {
        req.auth = jwt.decode(req.headers['x-auth'], config.secret);
        console.log('***************************************');
        console.log(req.auth);
        console.log('***************************************');
    }
    console.log('***************************************');
    console.log(req.auth);
    next();
};