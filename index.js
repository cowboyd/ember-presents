/* jshint node: true */
'use strict';
var Filter = require('broccoli-filter');
var MergeTrees = require('broccoli-merge-trees');
var path = require('path');

function Presentation(inputTree, options) {
  Filter.call(this, inputTree, options);
}

Presentation.prototype = Object.create(Filter.prototype);
Presentation.prototype.constructor = Presentation;
Presentation.prototype.extensions = ['json'];
Presentation.prototype.targetExtension = 'js';

Presentation.prototype.processString = function (string, srcFile) {
  return 'export default ' + string;
};

module.exports = {
  name: 'ember-presents',

  treeForApp: function(appTree) {
    var appPath;

    if (this.isDevelopingAddon()) {
      appPath = path.join(this.project.root, 'tests', 'dummy', 'app');
    } else {
      appPath = path.join(this.project.root, 'app');
    }
    var processedApp = new Presentation(appPath);

    return new MergeTrees([appTree, processedApp], {
      overwrite: true
    });
  }
};
