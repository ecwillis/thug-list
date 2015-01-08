module.exports = function(grunt){
  var _ = require('lodash');
  // Initialize
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    bower_concat : {
      all : {
        dest : 'public/javascripts/main.js',
        cssDest : 'public/stylesheets/main.css',
        callback: function(mainFiles, component){
          return _.map(mainFiles, function(filepath) {
            // Use minified files if available
            var min = filepath.replace(/\.js$/, '.min.js');
            min = min.replace(/\.css$/, '.min.css')
            if(grunt.file.exists(min))
            {
              console.log(min);
              return min;
            } else {
              console.log(filepath);
              return filepath;
            }
          });
        },
        bowerOptions: {
          relative : false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
}