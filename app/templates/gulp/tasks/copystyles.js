var gulp = require('gulp')
		,rename = require('gulp-rename')
		,config = require('../config').copystyles
;

// Copy our site styles to a site.css file
// for async loading later
gulp.task('copystyles', ['sass', 'sass:compressed'] , function () {
  return gulp.src(config.src)
    .pipe(rename({
      basename: "critical"
    }))
    .pipe(gulp.dest(config.dest));
});

