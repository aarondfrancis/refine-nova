// We're going to use the exact Tailwind config that Nova
// uses, but just change where we look for content.
let novaTailwindConfig = require('../vendor/laravel/nova/tailwind.config.js')

novaTailwindConfig.content = ['./resources/**/*{js,vue}']

module.exports = novaTailwindConfig
