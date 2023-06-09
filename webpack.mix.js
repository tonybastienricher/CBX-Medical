//js("resources/js/app.js", "public/js")

let mix = require('laravel-mix');

mix.copyDirectory('node_modules/swiper/swiper-bundle.min.js', 'assets');
mix.copyDirectory('node_modules/swiper/swiper-bundle.min.css', 'assets');


mix.js('resources/js/app.js', 'assets')
  .copy('resources/fonts/KH_Teka/KHTeka-Black.woff2', 'assets/KHTeka-Black.woff2')
  .copy('resources/fonts/KH_Teka/KHTeka-Bold.woff2', 'assets/KHTeka-Bold.woff2')
  .copy('resources/fonts/KH_Teka/KHTeka-Light.woff2', 'assets/KHTeka-Light.woff2')
  .copy('resources/fonts/KH_Teka/KHTeka-Medium.woff2', 'assets/KHTeka-Medium.woff2')
  .copy('resources/fonts/KH_Teka/KHTeka-Regular.woff2', 'assets/KHTeka-Regular.woff2')
  .copy('resources/fonts/ModelStandardSemiMono/ModelStandard_SemiMono_Variable.woff2', 'assets/ModelStandard_SemiMono_Variable.woff2')
  .postCss('resources/css/style.css', 'assets', [
    require('tailwindcss')
  ]);


mix.options({
  processCssUrls: false,
  fileLoaderDirs: {
    fonts: '../assets'
  }
});