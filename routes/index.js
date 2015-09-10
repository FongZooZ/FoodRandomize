var express = require('express');
var router = express.Router();
var Homepage = require('../api/Homepage.js');

/* GET home page. */
router.get('/', Homepage.getHomepage);

module.exports = router;