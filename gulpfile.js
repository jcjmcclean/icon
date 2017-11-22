const
	icons = require( 'melon-gulp-angular-inline-svg' );

// Icons task
gulp.task('icons', function(cb) {
	pump([
		gulp.src('./app/assets/icons/*.svg'),
		icons({
			module: 'app',
			constant: 'ICONS',
			optimize: true,
			file: 'icon.constant.js'
		}),
		gulp.dest('./app/components/common/config')
	], cb);
});
