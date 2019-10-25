var fs = require('fs');

var testimonialsFilePath = 'db/testimonials.json';

var loadFileTestimonials = function() {
  var fileData = fs.readFileSync(testimonialsFilePath, 'utf8');
  var testimonials = JSON.parse(fileData);

  return testimonials;
}

var saveFileTestimonials = function(posts) {
  var data = JSON.stringify(posts);
  fs.writeFileSync(testimonialsFilePath, data, 'utf8');
}

var getTestimonials = function() {
  var testimonials = loadFileTestimonials();
  return testimonials;
}

var saveTestimonials = function(newPost) {
  var testimonials = loadFileTestimonials();
  testimonials.push(newTestimonials);
  saveFileTestimonials(testimonials);
}

module.exports = {
  getTestimonials: getTestimonials,
  saveTestimonials: saveTestimonials
}