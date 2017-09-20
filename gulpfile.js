const gulp=require('gulp');
const concat=require('gulp-concat');
const babel = require('gulp-babel');
const babelify = require('babelify');
const browserify = require("browserify");
const source=require('vinyl-source-stream')
const glob=require('glob')


gulp.task('bundling suppliers templates',()=>{

	glob('www/assets/js_es6/suppliers/**/*.js',function(err,file){
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
			.pipe(gulp.dest('dist/'))
		})

	})
	
})

gulp.task('default',['bundling suppliers templates']);