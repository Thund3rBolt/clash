module.exports = function(grunt) {

	grunt.initConfig({


		uglify: {
	      my_target: {
	        files: {
	          'web/js/script.js': ['app/components/js/*.js']
	        } //files
	      } //my_target
	    }, //uglify

		compass: {
		  	dev: {
		  		dist: {
			  		options: {
			  			cssDir: 'web/css',
			  			config: 'config.rb'
			  		}
			  	}
		  	}
		 },

		watch: {
			options: { livereload: true },
			scripts: {
				files: ['app/components/js/*.js'],
				tasks: ['uglify'],
			}, //scripts
			sass: {
				files: ['app/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['app/*.html']
			} //html
		} //watch

		// notify: {
		// 	watchStyles: {
		// 		options: {
		// 			title: 'Task Completed',
		// 			message: 'watch:styles'
		// 		}
		// 	},
		// 	watchJS: {
		// 		options: {
		// 			title: 'Task Complete',
		// 			message: 'watch:js'
		// 		}
		// 	}
		// },

	}) //initConfig

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default',['watch']);
};