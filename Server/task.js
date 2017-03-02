var gulp = require('gulp');
var concat = require('gulp-concat')
var AppFiles = new (require('./app_files'))();
var spawn = require('child_process').spawn;


var gulpActivity = function(app, http) {

	this.app = app;
	this.http = http;

	var server_app = AppFiles.server;

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
			gulp.watch(AppFiles.custom.js, ['build_js', 'build_final_js']);
			gulp.watch(AppFiles.custom.css, ['build_css']);
			gulp.watch(server_app, ['gulp-autoreload']);
		});


		gulp.task('gulp-autoreload', function() {
			spawn('gulp', ['default'], {stdio: 'inherit'});
            process.exit();
     	 });



		gulp.task('default', ['connect', 'build_js', 'build_libs_js', 'build_final_js', 'build_css', 'build_libs_css', 'watch']);


	}
	
}
module.exports = gulpActivity;

