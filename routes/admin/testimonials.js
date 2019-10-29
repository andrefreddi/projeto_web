var express = require ('express');
var router = express.Router();
var testimonialsServices = require('../../services/testimonialsService');

router.get('/', function(req, res, next){
    var testimonials = testimonialsServices.getTestimonials();

    var data = {
        testimonials: testimonials
    };
    res.render('admin/testimonials/index', data);
});


router.get('/create', function(req, res, next) {

    res.render('admin/testimonials/create');
});

router.post('/create', function (req, res, next) {

  
    var newTestimonials = {};
    newTestimonials.id = newId;
    newTestimonials.name = req.body.name;
    newTestimonials.company = req.body.company;
    newTestimonials.title = req.body.title;
    newTestimonials.testimony = req.body.testimony;
  
    res.redirect('/admin/testimonials');
  });
  
  module.exports = router;