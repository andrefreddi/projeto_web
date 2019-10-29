var fs = require('fs');

var noticiasFilePath = 'db/noticias.json';

var loadFileNoticias = function() {
  var fileData = fs.readFileSync(noticiasFilePath, 'utf8');
  var noticias = JSON.parse(fileData);

  return noticias;
}

var saveFileNoticias = function(noticias) {
  var data = JSON.stringify(noticias);
  fs.writeFileSync(noticiasFilePath, data, 'utf8');
}

var getNoticias = function() {
  var noticias = loadFileNoticias();
  return noticias;
}

var saveNoticias = function(newNoticias) {
  var noticias = loadFileNoticias();
  noticias.push(newNoticias);
  saveFileNoticias(noticias);
}

module.exports = {
    getNoticias: getNoticias,
    saveNoticias: saveNoticias
}