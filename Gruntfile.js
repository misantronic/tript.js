module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				mangle: false
			},

			main: {
				files: {
					'tript.min.js'	: ['tript.js']
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// tasks
	grunt.registerTask('default', ['uglify']);
};