let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')
let path = require('path')
let unique = require('./unique')
let fs = require('fs')
require('./nova.mix')

let shouldCompileJavascript = process.env.npm_config_cssonly !== 'true'
let novaVersion =
  process.env.npm_config_nova ||
  fs
    .readFileSync(path.join(__dirname, `../build/versions.txt`), 'utf8')
    .split('\n')[0]

console.log(`Compiling for Nova version: ${novaVersion}`)

mix
  .nova('hammerstone/refine')
  .setPublicPath('dist')
  .alias({
    '@': path.join(__dirname, 'resources/js'),
  })
  .vue({
    version: 3,
  })
  .postCss('resources/css/card.css', `dist/css/${novaVersion}.css`, [
    tailwindcss('tailwind.config.js'),
    unique({
      // Remove all the styles that are already present in
      // this particular version of Nova's CSS.
      path: path.join(__dirname, `../build/nova/${novaVersion}/app.css`),
    }),
  ])

// When we're compiling the CSS over and over again for all the
// different Nova versions, we don't need to compile the JS.
if (!shouldCompileJavascript) {
  mix.js('resources/js/card.js', 'js')
}
