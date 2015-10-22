var fs = require('fs');
var path = require('path');

module.exports = {
  description: 'Generates a new presentation slide',

  afterInstall: function(options) {
    var fileName = path.join(options.target, 'app/presentation.json');
    var content = fs.readFileSync(fileName, {
      encoding: 'utf-8'
    });

    var json = JSON.parse(content);
    json.push(options.entity.name);

    fs.writeFileSync(fileName, JSON.stringify(json, null, 2));
  }
};
