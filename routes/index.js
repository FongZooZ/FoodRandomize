var express = require('express');
var router = express.Router();
var Homepage = require('../api/Homepage.js');

/* GET home page. */
router.get('/', Homepage.getHomepage);

router.post('/food', Homepage.addFood);
router.get('/food/:id', Homepage.getFoodById);
router.get('/food', Homepage.getAllFood);
router.put('/food/:id', Homepage.editFood);
router.delete('/food/:id', Homepage.deleteFood);

module.exports = router;