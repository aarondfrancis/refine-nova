let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')
    .vue({version: 3})
    .postCss('resources/css/card.css', 'dist/css', [
        tailwindcss('tailwind.config.js'),
    ])
    .nova('hammerstone/refine')
