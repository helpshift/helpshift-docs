const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function () {
  return {
    name: "loaders",
    configureWebpack() {
      return {
        resolve: {
          fallback: {
            fs: false,
          },
        },
        // https://stackoverflow.com/a/65556946
        plugins: [new NodePolyfillPlugin()],
      };
    },
  };
};
