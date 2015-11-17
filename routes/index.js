var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.get('host'))
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('index', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('index2', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('main', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('main2', { title: 'Express' });
});

router.get('/features', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('features', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('features2', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('contact', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('contact2', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('aboutus', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('aboutus2', { title: 'Express' });
});

router.get('/navbar', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('navbar', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('navbar2', { title: 'Express' });
});

router.get('/footer', function(req, res, next) {
  if(req.get('host') === 'www.kibosupport.com' || req.get('host') === 'www.kibosupport.com:3000')
    res.render('footer', { title: 'Express' });
  else if(req.get('host') === 'www.cloudkibo.com' || req.get('host') === 'www.cloudkibo.com:3000')
    res.render('footer2', { title: 'Express' });
});

module.exports = router;
