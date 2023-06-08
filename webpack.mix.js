//js("resources/js/app.js", "public/js")

let mix = require('laravel-mix');

mix.copyDirectory('node_modules/swiper/swiper-bundle.min.js', 'assets');
mix.copyDirectory('node_modules/swiper/swiper-bundle.min.css', 'assets');


mix.js('resources/js/app.js', 'assets')
  .copy('resources/fonts/KH_Teka_Trial/KHTekaTRIAL-Black.woff2', 'assets/KHTekaTRIAL-Black.woff2')
  .copy('resources/fonts/KH_Teka_Trial/KHTekaTRIAL-Bold.woff2', 'assets/KHTekaTRIAL-Bold.woff2')
  .copy('resources/fonts/KH_Teka_Trial/KHTekaTRIAL-Light.woff2', 'assets/KHTekaTRIAL-Light.woff2')
  .copy('resources/fonts/KH_Teka_Trial/KHTekaTRIAL-Medium.woff2', 'assets/KHTekaTRIAL-Medium.woff2')
  .copy('resources/fonts/KH_Teka_Trial/KHTekaTRIAL-Regular.woff2', 'assets/KHTekaTRIAL-Regular.woff2')
  .postCss('resources/css/style.css', 'assets', [
    require('tailwindcss')
  ]);


mix.options({
  processCssUrls: false,
  fileLoaderDirs: {
    fonts: '../assets'
  }
});