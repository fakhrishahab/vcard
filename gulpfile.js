var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	minify_html = require('gulp-minify-html'),
	imagemin = require('gulp-imagemin'),
	minifyCss = require('gulp-minify-css'),
	dist_path = 'dist/assets/',
	path = {
		script : './assets/js/*.js',
		img : './assets/img/**/*',
		style : './assets/style/*.css',
		font : './assets/fonts/*',
		html : './index.html'		
	};

gulp.task('html', function(){
	return gulp.src(path.html)		
		.pipe(minify_html())
		.pipe(gulp.dest('dist'))
})

gulp.task('scripts', function(){
	return gulp.src(path.script)
		.pipe(uglify())
		.pipe(gulp.dest(dist_path+'js'))
})

gulp.task('img', function(){
	return gulp.src(path.img)
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest(dist_path+'img'))
})

gulp.task('style', function(){
	return gulp.src(path.style)
		.pipe(minifyCss())
		.pipe(gulp.dest(dist_path+'style'))
})

gulp.task('font', function(){
	return gulp.src(path.font)
		.pipe(gulp.dest(dist_path+'fonts'))
})

gulp.task('clean', function(cb){
	del(['dist'], cb)
})

gulp.task('default', ['clean','scripts', 'html', 'img', 'style', 'font']);