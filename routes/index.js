var express = require('express');
var router = express.Router();
var Homepage = require('../api/Homepage.js');
var	NamePage = require('../api/NamePage.js');

/* GET home page. */
router.get('/', Homepage.getHomepage);

router.post('/food', Homepage.addFood);
router.get('/food/:id', Homepage.getFoodById);
router.get('/food', Homepage.getAllFood);
router.put('/food/:id', Homepage.editFood);
router.delete('/food/:id', Homepage.deleteFood);

// name displaying
router.get('/nameDisplay', NamePage.getNamePage);

router.post('/nameDisplay/name', NamePage.addName);
router.get('/nameDisplay/name/:id', NamePage.getNameById);
router.get('/nameDisplay/name', NamePage.getAllName);
router.put('/nameDisplay/name/:id', NamePage.editName);
router.delete('/nameDisplay/name/:id', NamePage.deleteName);

module.exports = router;