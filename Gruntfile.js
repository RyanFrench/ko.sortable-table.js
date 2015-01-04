module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
      uglify: {
        files: ['src/*.js'],
        tasks: ['uglify']
      }
    },
    uglify: {
      compressed: {
        options: {
          sourceMap: true,
          compress: {
            drop_console: true
          }
        },
        files: {
          'dist/ko.sortable-table.min.js': ['src/ko.sortable-table.js']
        }
      },
      beautified: {
        options: {
          compress: {
            drop_console: true
          },
          beautify: true
        },
        files: {
          'dist/ko.sortable-table.js': ['src/ko.sortable-table.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};