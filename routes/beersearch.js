/**
 * Created by cpalomino on 5/14/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/beersearch', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
