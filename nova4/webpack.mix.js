let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')
let path = require('path')
let unique = require('./unique')

// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .vue()
  .alias({
    '@': path.join(__dirname, 'resources/js'),
  })
  .postCss('resources/css/card.css', 'dist/css', [
    tailwindcss('tailwind.config.js'),
    // Remove all the styles that are already present in Nova's CSS.
    unique({
      path: path.join(__dirname, '../vendor/laravel/nova/public/app.css'),
    }),
  ])
  .webpackConfig({
    plugins: [
      // new BundleAnalyzerPlugin()
    ],
  })
  .nova('hammerstone/refine')
