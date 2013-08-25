module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // separator: ';',
      },
      dist: {
        src: ['src/js/main.js', 'src/js/app.js'],
        dest: 'dist/js/<%= pkg.name %>.js',
      },
    },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     files: {
    //       'dist/js/<%= pkg.name %>.min.js': ['src/js/main.js', 'src/js/app.js']
    //     }
    //   }
    // },
    recess: {
        options: {
            compile: true
        },
        gruntsite: {
            files: {
                'dist/css/<%= pkg.name %>.css': [
                  'lib/bootstrap/less/bootstrap.less',
                  'src/less/<%= pkg.name %>.less']
                // 'dist/css/bootstrap.css': ['lib/bootstrap/less/bootstrap.less']
            }
        },
        min: {
            options: {
                compress: true
            },
            files: {
                'dist/css/<%= pkg.name %>.min.css': [
                  'lib/bootstrap/less/bootstrap.less',
                  'src/less/<%= pkg.name %>.less'
                ]
                // 'dist/css/bootstrap.min.css': ['lib/bootstrap/less/bootstrap.less']               
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
      recess: {
          files: ['src/less/*.less','lib/bootstrap/less/*.less'],
          tasks: ['recess']
      },
      css: {
        files: 'dist/css/**/*.css',
        // tasks: ['csslint:lax'],
        options: {
          // livereload: true,
        },
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['concat']
      }
    },
    shell: {
      bumpPatch: {
        command: 'npm version patch'
      },
      bumpMinor: {
        command: 'npm version minor'
      },
      bumpMajor: {
        command: 'npm version major'
      }
    },
    changelog: {},
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['dist/css/<%= pkg.name %>.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['dist/css/<%= pkg.name %>.css']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  // grunt.loadNpmTasks('grunt-devtools');
  
  // Default task(s).
  grunt.registerTask('default', ['clean','jshint','concat','recess']);
  grunt.registerTask('commit', ['shell:bumpPatch','changelog']);
};
