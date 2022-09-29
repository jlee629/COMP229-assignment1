/* 

index.js, Jungyu Lee, 301236221, Sep 29 2022

*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Welcome to Jungyu Lee's Home!"});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: "Welcome to Jungyu Lee's Home!"});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects'});
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'My Contact'});
});
module.exports = router;
