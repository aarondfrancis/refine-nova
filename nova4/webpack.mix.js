let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')
const path = require('path')

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .vue({ version: 3 })
  .alias({
    '@': path.join(__dirname, 'resources/js'),
  })
  .postCss('resources/css/card.css', 'dist/css', [
    tailwindcss('tailwind.config.js'),
  ])
  .webpackConfig({
    plugins: [
      // new BundleAnalyzerPlugin()
    ],
  })
  .nova('hammerstone/refine')
