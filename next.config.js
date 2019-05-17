const path = require("path");
const glob = require("glob");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: false,
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/",
          outputPath: "static/"
        }
      }
    );
    return config;
  }
});
