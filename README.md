# sass-test

Building this project (which depends on `sass-loader` 7.2) currently will fail with error
```
ERROR in ./src/theme.sass
Module not found: Error: Can't resolve '../fonts/fontawesome-webfont.eot' in '/home/pedro-w/Projects/sass-test/src'
 @ ./src/theme.sass 5:38-81
 @ multi ./src/index.js ./src/theme.sass
```

Changing the dependency to `sass-loader` 7.1 makes the build succeed
