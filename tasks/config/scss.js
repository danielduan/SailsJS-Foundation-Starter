// tasks/config/scss.js
// --------------------------------
// Sass configuration

module.exports = function(grunt) {

  // We use the grunt.config api's set method to configure an
  // object to the defined string. In this case the task
  // 'sass' will be configured based on the object below.
  grunt.config.set('sass', {
    dev: {
    options: {
      style: 'expanded' //Set your prefered style for development here.
    },
    files: [{
      expand: true,
      cwd: 'assets/styles/',
      src: ['*.scss', '*.sass'], // Feel free to remove a format if you do not use it.
      dest: '.tmp/public/styles/',
      ext: '.css'
    }, {
      expand: true,
      cwd: 'assets/linker/styles/',
      src: ['*.scss', '*.sass'], // Feel free to remove a format if you do not use it.
      dest: '.tmp/public/linker/styles/',
      ext: '.css'
    }
    ]
  }
  });

  // load npm module for sass.
  grunt.loadNpmTasks('grunt-contrib-sass');
};
