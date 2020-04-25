// Require Laravel Mix
let mix = require('laravel-mix');

// Do Laravel Mix
mix.setPublicPath( '/' )
    .sass( 'assets/scss/app.scss', 'style.css' )
    .options({
        processCssUrls: false
    });