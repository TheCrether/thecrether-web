const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const withPlugins = require("next-compose-plugins");
const path = require("path");

// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

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
  postcssLoaderOptions: { parser: true, autoprefixer: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withPlugins([], nextConf);
