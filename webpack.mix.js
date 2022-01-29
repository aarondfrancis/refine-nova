const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.setPublicPath('dist')
    .postCss('resources/css/card.css', 'dist/css')
    .js('resources/js/card.js', 'js')
    .vue()
    .webpackConfig({
        externals: {
            vue: 'undefined',
        },
        plugins: [
            // new BundleAnalyzerPlugin()
        ],
    });
