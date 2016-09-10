const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer-stylus');
const concat = require('gulp-concat');

const common_dev_css_dir = './pages/common/';
const common_css_dir = './../stylesheets/';

const editerror_dev_css_dir = './pages/editerror/';
const editerror_css_dir = './../stylesheets/editerror/';

const errorlist_dev_css_dir = './pages/errorlist/';
const errorlist_css_dir = './../stylesheets/errorlist/';

const login_dev_css_dir = './pages/login/';
const login_css_dir = './../stylesheets/login/';

const signup_dev_css_dir = './pages/signup/';
const signup_css_dir = './../stylesheets/signup/';

const userinfo_dev_css_dir = './pages/userinfo/';
const userinfo_css_dir = './../stylesheets/userinfo/';

gulp.task('stylus_common', function () {
	return gulp.src(common_dev_css_dir+'common.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(common_css_dir));
});
gulp.task('stylus_editerror', function () {
	return gulp.src(editerror_dev_css_dir+'style.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(editerror_css_dir));
});
gulp.task('stylus_errorlist', function () {
	return gulp.src(errorlist_dev_css_dir+'style.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(errorlist_css_dir));
});
gulp.task('stylus_login', function () {
	return gulp.src(login_dev_css_dir+'style.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(login_css_dir));
});
gulp.task('stylus_signup', function () {
	return gulp.src(signup_dev_css_dir+'style.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(signup_css_dir));
});
gulp.task('stylus_userinfo', function () {
	return gulp.src(userinfo_dev_css_dir+'style.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false,
		use: [autoprefixer()]
	}))
	.pipe(gulp.dest(userinfo_css_dir));
});

gulp.task('common', ['stylus_common'],function() {
	gulp.watch(common_dev_css_dir+'common.styl',['stylus_common']);
});
gulp.task('editerror', ['stylus_editerror'],function() {
	gulp.watch(editerror_dev_css_dir+'style.styl',['stylus_editerror']);
});
gulp.task('errorlist', ['stylus_errorlist'],function() {
	gulp.watch(errorlist_dev_css_dir+'style.styl',['stylus_errorlist']);
});
gulp.task('login', ['stylus_login'],function() {
	gulp.watch(login_dev_css_dir+'style.styl',['stylus_login']);
});
gulp.task('signup', ['stylus_signup'],function() {
	gulp.watch(signup_dev_css_dir+'style.styl',['stylus_signup']);
});
gulp.task('userinfo', ['stylus_userinfo'],function() {
	gulp.watch(userinfo_dev_css_dir+'style.styl',['stylus_userinfo']);
});