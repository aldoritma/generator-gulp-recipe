var gulp = require('gulp')
		,config = require('../config').copy
;

gulp.task('copy:misc', ['templates'] , function() {
  gulp.src(config.miscSrc)
    .pipe(gulp.dest(config.miscDest));
});