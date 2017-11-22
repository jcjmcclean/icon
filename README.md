# Icon
Angular icon directive and gulp task

Want super awesome svg icons for everything but hate inlining svgs? This is a great option for you.

1. Put all your svg icons in one directory within your project (make sure they have sensible names)
2. Copy the icons task from the example gulpfile (make sure you include the `melon-gulp-angular-inline-svg` gulp plugin)
3. Update the svg icons path in the gulp task (`gulp.src('./app/assets/icons/*.svg')`)
4. Update your icons constant filename if required (`file: 'icon.constant.js'`)
5. Update your icons constant path if required (`gulp.dest('./app/components/common/config')`)
6. Run the gulp task, all your svg files should now be inlined within an angular constant
7. Use your icons!

Example directive usage:
```html
<div icon class="icon" name="icon"></div>
<a icon class="icon" name="icon"></a>
<button icon class="icon" name="icon"></button>
```
