var gulp = require('gulp'),
	concat = require('gulp-concat'),
	minify = require('gulp-minify'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	del = require('del'),
	minify_html = require('gulp-minify-html'),
	imagemin = require('gulp-imagemin'),
	watch = require('gulp-watch'),
	minifyCss = require('gulp-minify-css'),
	dist_path = 'dist/assets/',
	file_path = 'dist/files/',
	path = {
		script : './assets/js/*.js',
		img : './assets/img/**/*',
		style : './assets/style/*.css',
		font : './assets/fonts/*',
		html : './index.html',
		file : './files/*'
	};

gulp.task('html', function(){
	return gulp.src(path.html)
		.pipe(watch(path.html))
		.pipe(minify_html())
		.pipe(gulp.dest('dist'))
})

gulp.task('scripts', function(){
	return gulp.src(path.script)
		.pipe(watch(path.script))
		.pipe(minify())
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
		.pipe(watch(path.style))
		.pipe(minifyCss())
		.pipe(gulp.dest(dist_path+'style'))
})

gulp.task('font', function(){
	return gulp.src(path.font)
		.pipe(gulp.dest(dist_path+'fonts'))
})

gulp.task('files', function(){
	return gulp.src(path.file)
		.pipe(gulp.dest(file_path))
})

gulp.task('watch', function(cb){
	watch('assets/*', function(){
		gulp.src('assets/*')
			.pipe(watch('assets/*'))
			.on('end', cb)
	})
})

gulp.task('clean', function(cb){
	del(['dist'], cb)
})

gulp.task('default', ['clean','scripts', 'html', 'img', 'style', 'font', 'files', 'watch']);