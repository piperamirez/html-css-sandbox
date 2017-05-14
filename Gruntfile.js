module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['www/**/*.css'],
      },
      js: {
        files: ['www/**/*.js'],
      },
      html: {
        files: ['www/**/*.html'],
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'www',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('serve', ['connect', 'watch']);
};
