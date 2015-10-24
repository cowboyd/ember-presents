var fs = require('fs');
var path = require('path');
var String = require('string');

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
  },

  locals: function(options) {
    var name = String(options.entity.name).humanize().titleCase().s;

    return {
      normalizedName: name
    };
  },

  normalizeEntityName: function(entityName) {
    return String(entityName).dasherize().s;
  }

}
