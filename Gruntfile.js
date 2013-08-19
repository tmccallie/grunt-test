module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['src/js/main.js', 'src/js/app.js']
        }
      }
    },
    recess: {
        options: {
            compile: true
        },
        gruntsite: {
            files: {
                'dist/css/<%= pkg.name %>.css': ['src/less/<%= pkg.name %>.less']
            }
        },
        min: {
            options: {
                compress: true
            },
            files: {
                'dist/css/<%= pkg.name %>.min.css': ['src/less/<%= pkg.name %>.less']
            }
        }
    },
    clean: {
        dist: ['dist']
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
        trey: {
            files: 'src/less/*.less',
            tasks: ['recess']
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  // Default task(s).
  grunt.registerTask('default', ['clean','uglify','jshint','recess']);

  // grunt.registerTask('watch', ['watch']);

};
