var gulp = require('gulp');
var concat = require('gulp-concat')
var AppFiles = new (require('./app_files'))();


var gulpActivity = function(app, http) {

	this.app = app;
	this.http = http;

	var libs_js = [
	                'ui/node_modules/angular/angular.min.js', 'ui/libs/socket.io/socket.io.min.js'
	              ];
	var ui_files = ['ui/'];
	var ui_js = ['ui/*.js', 'ui/app/directives/*.js', 'ui/app/services/*.js'];
	var libs_css = 

	this.start = function(port) {

		

		gulp.task('connect', function() {
				   http.listen(port, function(){
				   console.log('listening on :' + port);
				});
		});

		gulp.task('build_libs_js', function() {
			return gulp.src(AppFiles.libs.js)
			         .pipe(concat('scripts_libs.js'))
			         .pipe(gulp.dest('ui/build'));
		})

		gulp.task('build_js', function() {
			return gulp.src(AppFiles.custom.js)
			         .pipe(concat('scripts.js'))
			         .pipe(gulp.dest('ui/build'));
		})

		gulp.task('build_libs_css', function() {
			return gulp.src(AppFiles.libs.css)
			         .pipe(concat('style_libs.css'))
			         .pipe(gulp.dest('ui/build'));
		})

		gulp.task('build_css', function() {
			return gulp.src(AppFiles.custom.css)
			         .pipe(concat('styles.css'))
			         .pipe(gulp.dest('ui/build'));
		})



		gulp.task('build_final_js', function() {
			return gulp.src(['ui/build/scripts_libs.js', 'ui/build/scripts.js'])
			         .pipe(concat('script.js'))
			         .pipe(gulp.dest('ui/build'));
		})

		gulp.task('watch', function(event) {
			console.log("files changed")
			gulp.watch(ui_files, ['build_js', 'build_final_js']);
			gulp.watch(AppFiles.custom.js, ['build_js', 'build_final_js']);
			gulp.watch(AppFiles.custom.css, ['build_css']);
		})
		gulp.task('default', ['connect', 'build_js', 'build_libs_js', 'build_final_js', 'build_css', 'build_libs_css', 'watch']);


	}
	
}
module.exports = gulpActivity;

