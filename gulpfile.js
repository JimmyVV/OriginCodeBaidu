var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    prefix = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    flexpost = require('postcss-flexboxfixer'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'), //合并  
    webpack = require('gulp-webpack'), //webpack处理流文件
    config = require('./webpack.config'), //webpack的配置文件
    uglify = require('gulp-uglify'), //压缩  
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    group = require('gulp-group-files');



gulp.task('watch', function() {
    gulp.watch('app/styles/**/*.scss', ['sass'])
});
gulp.task('sass',()=>{
    var processors = [ //这里就是中间件
        //已经require("autoprefixer");
        autoprefix({
            browsers: ['last 3 Safari versions', "last 2 Explorer versions", 'last 2 Explorer versions', "iOS 5"],
            cascade: true,
            remove: true
        }),
        flexpost
    ];
    return gulp.src("app/styles/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('app/styles'));
});
gulp.task('sync', function() {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/img/**/*.png',
        'app/src/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
});
gulp.task('copy', function() {
    gulp.watch(['app/dist/**/*.js','app/index.html','app/styles/**/*.css'],()=>{
        gulp.src('app/dist/**/*.js')
        .pipe(gulp.dest('app/blog/public/dist'));
    gulp.src('app/index.html')
        .pipe(rename("index.ejs"))
        .pipe(gulp.dest('app/blog/views'));
    gulp.src('app/styles/**/*.css')
        .pipe(gulp.dest('app/blog/public/styles'));
    })
    // gulp.src('app/styles/**/*.css')
    //     .pipe(gulp.dest('../h5Games/styles'));
    //  gulp.src('app/result.html')
    //     .pipe(rename("result.ejs"))
    //     .pipe(gulp.dest('../h5Games/views'));
    // gulp.src(['app/img/**/*.png','app/img/**/*.jpg'])
    //     .pipe(gulp.dest('../h5Games/img'));
})

gulp.task('eslint', function() {
    return gulp.src(['app/js/entry/upload.js'])
        .pipe(eslint({
            "parser": "babel-eslint",
            "rules": {
                "strict": 0
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})
gulp.task('default', ['copy', 'watch']);
