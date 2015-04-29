module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: "\n"
			},

			jquery: {
				src: [
					'dist/tript.js',
					'jquery.plugin.js'
				],
				dest: 'dist/jquery.tript.js'
			}
		},

		uglify: {
			options: {
				mangle: false
			},

			main: {
				files: {
					'dist/tript.min.js'			: ['dist/tript.js'],
					'dist/jquery.tript.min.js'	: ['dist/jquery.tript.js']
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// tasks
	grunt.registerTask('default', ['concat', 'uglify']);
};