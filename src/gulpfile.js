const gulp=require('gulp')
const uglify=require('gulp-uglify')
const uglify_css=require('gulp-clean-css')
const uglifyes=require('gulp-uglifyes')
const rename=require('gulp-rename')
const htmlmin=require('gulp-htmlmin')
const concat=require('gulp-concat')
const babelify = require('babelify')
const browserify = require("browserify")
const source=require('vinyl-source-stream')
const buffer=require('vinyl-buffer')
const glob=require('glob')
const runSequence = require('run-sequence')
const del = require('del')

//remove directory
gulp.task('clean',()=>{
	return del('./test')
})

//copy all files to www except suppliers and pages
gulp.task('copying files from src to www',()=>{
	gulp.src(['./**/*.*','!./assets/js_es6/components/**/*.*','!./assets/js_es6/suppliers/**/*.*','!./assets/js_es6/authentication/**/*.*','!./assets/js_es6/routers/**/*.*','!./assets/css/**/*.css','!./**/*.html'])
	.pipe(gulp.dest('../www'))
})


//minify html
gulp.task('minifying html',()=>{
	gulp.src(['./**/*.html'])
	.pipe(htmlmin({collapseWhitespace: true,minifyCSS: true,removeComments: true}))
	.pipe(gulp.dest('../www'))
})

//minify css
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
		        presets : ["env"]
		    }))
		    .bundle()
		    .pipe(source(entry))
		    .pipe(buffer())
		    .pipe(uglify())
			.pipe(gulp.dest('../www'))
		})

	})
	
})


//routers/
gulp.task('loading routers',()=>{
	glob('./assets/js_es6/routers/**/*.js',function(err,file){
		if(err) done(err)
		var file=file.map((entry)=>{
			return browserify({
		        entries: [entry],
		    })
			.transform(babelify.configure({
		        presets : ["env"]
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
gulp.task('bundling authentication module',()=>{
	glob('./assets/js_es6/authentication/**/*.js',function(err,file){
		if(err) done(err)
		var file=file.map((entry)=>{
			return browserify({
		        entries: [entry],
		    })
			.transform(babelify.configure({
		        presets : ["env"]
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
		        presets : ["env"]
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
	runSequence('copying files from src to www','bundling components',['bundling authentication module','bundling suppliers module','loading routers','minifying html','minifying css'])
});

