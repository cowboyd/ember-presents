module.exports = {
  description: 'Generates a new presentation slide',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    console.log(options);
    // var file = 'app/presentation.js';
    // var text = "";
    // var afterText = "import resolver from './helpers/resolver';" + EOL;

    // return this.insertIntoFile(file, text, { after: afterText});
  }
};
