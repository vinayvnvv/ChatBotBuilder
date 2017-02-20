var gulp = require('gulp');
var concat = require('gulp-concat')


var gulpActivity = function(app, http) {

	this.app = app;
	this.http = http;

	this.start = function(port) {

		var ui_files = ['ui/*.*'];

		gulp.task('connect', function() {
				   http.listen(port, function(){
				   console.log('listening on :' + port);
				});
		});

		gulp.task('build_js', function() {
			return gulp.src(['ui/*.js'])
			         .pipe(concat('scripts.js'))
			         .pipe(gulp.dest('ui/build'));
		})

		gulp.task('watch', function(event) {
			gulp.watch(ui_files, ['connect', 'build_js']);
		})
		gulp.task('default', ['connect', 'build_js', 'watch']);


	}
	
}
module.exports = gulpActivity;

