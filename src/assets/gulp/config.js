'use strict'

module.exports = {
  directories: {
    'dist': {
      'base': 'dist',
      'markup': 'dist',
      'fonts': 'dist/assets/fonts',
      'icons': 'dist/assets/icons',
      'images': 'dist/assets/images',
      'scripts': 'dist/assets/js',
      'styles': 'dist/assets/css',
    }
  },
  vendor: {
    scssDirectories: [
      'src/assets/vendor/bootstrap-sass/assets/stylesheets',
      'src/assets/vendor/slick-carousel/slick/',
    ],
    scriptFiles: [
      'src/assets/vendor/jquery/dist/jquery.js',
      'src/assets/vendor/bootstrap-sass/assets/javascripts/bootstrap.js',
      'src/assets/vendor/slick-carousel/slick/slick.min.js',
    ],
    fontFiles: [
      //'src/assets/vendor/bootstrap-sass/assets/fonts/bootstrap/**/*',
      'src/assets/fonts/**/*',
    ]
  }
}
