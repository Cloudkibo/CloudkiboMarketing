var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('index', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('index2', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('main', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('main2', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('features', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('features2', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('contact', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('contact2', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('aboutus', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('aboutus2', { title: 'Express' });
});

router.get('/navbar', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('navbar', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('navbar2', { title: 'Express' });
});

router.get('/footer', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com')
    res.render('footer', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com')
    res.render('footer2', { title: 'Express' });
});

module.exports = router;
