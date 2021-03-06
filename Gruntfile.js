module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( 'package.json' ),

		watch: {
		
		  scripts: {
		    files: ['js/*', 'js/vendor/*'],
		    tasks: ['uglify', 'concat', 'jshint'],
		    options: { livereload: true }
		  }, 

		  styles: {
		    files: ['scss/*'],
		    tasks: ['compass'],
		    options: { livereload: true }
		  },

		  markup: {
		  	files: ['*.html', '*.php'],
		  	options: { livereload: true }
		  }
		
		},

		concat: {
			dist: {
				src: ['js/vendor/v_*.js'],
				dest: 'js/vendor/vendor.js'
			}
		},

		uglify: {
			build: {
				files: { 'js/main.min.js': ['js/main.js'] }
			}
		},

		compass: {
			dist: {
				options: {config: 'config.rb' }
			}
		},
    
    jshint: {
      all: ['Gruntfile.js', 'js/*.js', '!js/*.min.js', '!js/vendor/*.js']
    }


	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'compass'] );

};
