const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: path.resolve(__dirname, "./main.js"),
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./webpack"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
}
