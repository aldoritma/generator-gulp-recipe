var gulp = require('gulp')
    ,critical = require('critical')
    ,config = require('../config').critical
;

// Generate & Inline Critical-path CSS
gulp.task('critical', ['templates', 'copystyles'] , function () {

  // At this point, we have our
  // production styles in main/styles.css

  // As we're going to overwrite this with
  // our critical-path CSS let's create a copy
  // of our site-wide styles so we can async
  // load them in later. We do this with
  // 'copystyles' above

  critical.generateInline({
    base: config.base,
    src: config.src,
    styleTarget: config.styleTarget,
    htmlTarget: config.htmlTarget,
    width: config.width,
    height: config.height,
    minify: config.minify
  });
});