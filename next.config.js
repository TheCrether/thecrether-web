const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const path = require("path");

const nextConf = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    config.resolve.alias.images = path.join(__dirname, "public", "images");

    return config;
  },
  target: "serverless",
  postcssLoaderOptions: { parser: true, autoprefixer: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        webp: {
          quality: 50,
        },
      },
    ],
  ],
  nextConf
);
