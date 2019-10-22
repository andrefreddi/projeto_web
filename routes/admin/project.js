var express = require ('express');
var router = express.Router();
var projectServices = require('../../services/projectServices');

router.get('/', function(req, res, next){
    var projects = projectServices.getProjects();

    var data = {
        projects: projects
    };
    res.render('admin/project/index', data);
});

router.get('/create', function(req, res, next) {

    res.render('admin/project/create');
});

router.post('/create', function (req, res, next) {
    var projects = projectServices.getProjects();
  
    var newId = projects.length + 1;
  
    var newProjects = {};
    newProjects.id = newId;
    newProjects.title = req.body.title;
    newProjects.image = req.body.image;
    newProjects.description = req.body.description;
    newProjects.body = req.body.postBody;
  
    projectServices.saveProjects(newProjects);
  
    res.redirect('/admin/project');
  });
  
  module.exports = router;