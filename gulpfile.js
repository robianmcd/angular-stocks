var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),

    buildDir = 'build',
    templateFiles = ['client/**/*.html', '!client/bower/**', '!client/index.html'],
    indexFile = ['client/index.html'],
    jsFiles = ['client/**/*.js', '!client/bower/**'],
    styleFiles = ['client/styles.css', 'client/bower/bootstrap/dist/css/bootstrap.min.css'],
    vendorFiles = [
        'client/bower/jquery/dist/jquery.js',
        'client/bower/angular/angular.js',
        'client/bower/angular-route/angular-route.js',
        'client/bower/angular-animate/angular-animate.js',
        'client/bower/angular-strap/dist/angular-strap.js',
        'client/bower/angular-strap/dist/angular-strap.tpl.js'
    ];


gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: '../client'}))
        .pipe(gulp.dest(buildDir));
});

gulp.task('vendor', function () {
    return gulp.src(vendorFiles)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildDir));
});

gulp.task('templates', function () {
    return gulp.src(templateFiles)
        .pipe(gulp.dest(buildDir));
});

gulp.task('index', function () {
    return gulp.src(indexFile)
        .pipe(gulp.dest(buildDir));
});

gulp.task('styles', function () {
    return gulp.src(styleFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['js', 'templates', 'index', 'styles', 'vendor']);

gulp.task('default', ['build'], function () {
    gulp.watch(vendorFiles, ['vendor']);
    gulp.watch(jsFiles, ['js']);
    gulp.watch(templateFiles, ['templates']);
    gulp.watch(styleFiles, ['styles']);
    gulp.watch(indexFile, ['index']);
});