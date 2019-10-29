var express = require ('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');
var noticiasServices = require('../../services/noticiasServices');

router.get('/', function(req, res, next){
    var noticias = noticiasServices.getNoticias();

    var data = {
        noticias: noticias
    };
    res.render('admin/noticias/index', data);
});

router.get('/create', function(req, res, next) {

    res.render('admin/noticias/create');
});

router.post('/create', uploader.single('image'), function (req, res, next) {
    var noticias = noticiasServices.getNoticias();
  
    var newId = noticias.length + 1;
  
    var newNoticias = {};
    newNoticias.id = newId;
    newNoticias.title = req.body.title;
    newNoticias.image = req.file.filename;
    newNoticias.description = req.body.description;
    newNoticias.link = req.body.link;
  
    noticiasServices.saveNoticias(newNoticias);
  
    res.redirect('/admin/noticias');
  });
  module.exports = router;