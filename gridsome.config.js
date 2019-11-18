// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");
const Purgecss = require("@fullhuman/postcss-purgecss");
const purgecss = new Purgecss({
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md"
  ],
  whitelist: ["svg:not(:root).svg-inline--fa"],
  whitelistPatterns: [/^fa-/, /^svg-inline--fa/],
  whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  siteName: "Shiba Studio - Sydney Based Design & Development",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
        ]
      }
    }
  }
};
