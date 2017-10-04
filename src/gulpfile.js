const gulp=require('gulp')
const uglify=require('gulp-uglify')
const uglify_css=require('gulp-clean-css')
const htmlmin=require('gulp-htmlmin')
const concat=require('gulp-concat')
const babelify = require('babelify')
const browserify = require("browserify")
const source=require('vinyl-source-stream')
const buffer=require('vinyl-buffer')
const glob=require('glob')
const runSequence = require('run-sequence')
const del = require('del')


gulp.task('clean',()=>{
	return del('./test')
})

//copy all files to www except suppliers and pages
gulp.task('copying files from src to www',()=>{
	gulp.src(['./**/*.*','!./assets/js_es6/components/**/*.*','!./assets/js_es6/suppliers/**/*.*','!./assets/css/**/*.css','!./**/*.html'])
	.pipe(gulp.dest('../www'))
})

gulp.task('minifying html',()=>{
	gulp.src(['./**/*.html'])
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('../www'))
})

gulp.task('minifying css',()=>{
	gulp.src(['./assets/css/**/*.css'])
	.pipe(uglify_css())
	.pipe(gulp.dest('../www/assets/css'))
})

//components
gulp.task('bundling components',()=>{
	glob('./assets/js_es6/components/**/*.js',function(err,file){
		if(err) done(err)

		var file=file.map((entry)=>{
			return browserify({
		        entries: [entry],
		    })
			.transform(babelify.configure({
		        presets : ["es2015"]
		    }))
		    .bundle()
		    .pipe(source(entry))
		    .pipe(buffer())
		    .pipe(uglify())
			.pipe(gulp.dest('../www'))
		})

	})
	
})


//suppliers/
gulp.task('bundling suppliers module',()=>{
	glob('./assets/js_es6/suppliers/**/*.js',function(err,file){
		if(err) done(err)
		var file=file.map((entry)=>{
			return browserify({
		        entries: [entry],
		    })
			.transform(babelify.configure({
		        presets : ["es2015"]
		    }))
		    .bundle()
		    .pipe(source(entry))
		    .pipe(buffer())
		    .pipe(uglify())
			.pipe(gulp.dest('../www'))
		})
	})	
})

gulp.task('watch',()=>{
	gulp.watch('./assets/js_es6/**/*.js',()=>{
		runSequence('bundling components','bundling suppliers module');
	})
})

gulp.task('default',(cb)=>{
	//build
	runSequence('copying files from src to www','bundling components','bundling suppliers module','minifying html','minifying css');

	
});

