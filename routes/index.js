var express = require('express');
var router = express.Router();
var Homepage = require('../api/Homepage.js');
var	NamePage = require('../api/NamePage.js');

/* GET home page. */
router.get('/', Homepage.getHomepage);

router.post('/api/food', Homepage.addFood);
router.get('/api/food/:id', Homepage.getFoodById);
router.get('/api/food', Homepage.getAllFood);
router.put('/api/food/:id', Homepage.editFood);
router.delete('/api/food/:id', Homepage.deleteFood);

// name displaying
router.get('/nameDisplay', NamePage.getNamePage);

router.post('/api//name', NamePage.addName);
router.get('/api/name/:id', NamePage.getNameById);
router.get('/api/name', NamePage.getAllName);
router.put('/api/name/:id', NamePage.editName);
router.delete('/api/name/:id', NamePage.deleteName);

module.exports = router;