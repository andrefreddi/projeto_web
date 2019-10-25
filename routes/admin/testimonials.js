var express = require ('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');
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

router.post('/create', uploader.single('image'), function (req, res, next) {
    var testimonials = testimonialsServices.getTestimonials();
  
    var newId = testimonials.length + 1;
  
    var newTestimonials = {};
    newTestimonials.id = newId;
    newTestimonials.title = req.body.title;
    newTestimonials.image = req.file.filename;
    newTestimonials.description = req.body.description;
    newTestimonials.body = req.body.postBody;
  
    testimonialsServices.saveTestimonials(newTestimonials);
  
    res.redirect('/admin/testimonials');
  });
  
  module.exports = router;