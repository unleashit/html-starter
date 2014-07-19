module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          // copy bootstrap less
          {expand: true, cwd: 'bower_components/bootstrap/less', src: ['**'], dest: 'libraries/bootstrap/less/'},
          // copy bootstrap js
          {expand: true, cwd: 'bower_components/bootstrap/js', src: ['**'], dest: 'libraries/bootstrap/js/'},
          // copy font awesome less
          {expand: true, cwd: 'bower_components/font-awesome/less', src: ['**'], dest: 'libraries/font-awesome/less'},
          // copy font awesome fonts
          {expand: true, cwd: 'bower_components/font-awesome/fonts', src: ['**'], dest: 'fonts/'},
        ]
      }
    },
    concat: {
        dist: {
            src: [
                'js/custom.js',  // This specific file
                'libraries/bootstrap/js/*.js' // All JS in the libs folder
                
            ],
            dest: 'js/scripts.js',
        }
    },
    autoprefixer: {
        options: {
            browsers: ['last 2 version', 'ie 8', 'ie 9']
           },
        no_dest: {
          src: 'css/styles.css',
        }
      },
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/style.css": "less/style.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          cleancss: false,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    sass: {
      dist: {
        options: {
          compass: false,
          sourcemap: 'true'
        },
        files: {
          'css/styles.css': 'css/styles.scss'
        }
      }
    },
    uglify: {
        build: {
            src: 'js/scripts.js',
            dest: 'js/scripts.min.js'
        }
    },
  responsive_images: {
    myTask: {
      options: {
        engine: 'im'
      },
      files: [{
        expand: true,
        src: ['images/source/*.{jpg,gif,png}'],
        dest: 'images/'
      }]
    }
  },
    imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 4,
            },
            files: [{
                expand: true,
                cwd: 'images/source',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/'
            }]
        }
    },
    watch: {
        scripts: {
            files: ['js/scripts.js'],
            tasks: ['concat', 'uglify'],
            options: {
                spawn: false,
            }
        },

        css: {
            files: ['css/*.scss'],
            tasks: ['sass']
        }
    },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                      'css/*.css',
                      'js/*.js',
                      '*.html'
                ]},
                options: {
                    watchTask: true,
                    injectChanges: true,
                    ghostMode: {
                      clicks: false,
                      scroll: false,
                      links: false,
                      forms: false
                  }
                }
            }
        },
});

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('build', ['sass', 'concat', 'uglify', 'autoprefixer']);
    grunt.registerTask('default', ["browserSync", "watch"]);
};