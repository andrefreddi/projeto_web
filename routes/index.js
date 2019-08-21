var express = require('express');
var router = express.Router();
var postsServices = require('../services/postsServices'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsServices.getPosts();

  res.render('index', { title: 'Blog', posts: posts } );
});

module.exports = router;
