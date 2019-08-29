var express = require('express');
var router = express.Router();
var postsServices = require('../services/postsServices');
var postsServicesd = require('../services/postsServicesd');
var projectServices = require('../services/projectServices');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsServicesd.getPosts();

  res.render('index', { title: 'Blog', posts: posts } );
});

router.get('/posts/:postId', function(req, res, next){

var postId = req.params.postId;

var posts = postsServices.getPosts();

var post = posts.filter((post) => post.id == postId) [0];

res.render('post', {title: post.title, post: post});

});

router.get('/project/:projectId', function(req, res, next){

  var projectId = req.params.projectId;
  
  var projects = projectServices.getProjects();
  
  var project = projects.filter((project) => project.id == projectId) [0];
  
  res.render('project', {title: 'project', projects: projects});
  
  });

router.get('/project', function(req, res, next) {
  var projects = projectServices.getProjects();

  res.render('project', { title: 'Todos os Projetos', projects: projects } );
});

router.get('/posts', function(req, res, next) {
  var posts = postsServices.getPosts();

  res.render('allposts', { title: 'Todas as Postagens', posts: posts } );
});

module.exports = router;
