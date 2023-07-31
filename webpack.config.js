const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const output = {
  filename: "js/main.js",
  path: path.resolve(
    __dirname,
    process.env?.DESTINATION_DIR ? process.env?.DESTINATION_DIR : "build",
  ),
};

module.exports = {
  entry: "./src/index.js",
  mode: process.env?.NODE_ENV ? process.env?.NODE_ENV : "development",
  output,
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/css", to: `${output.path}/css` },
        { from: "src/img", to: `${output.path}/img` },
        { from: "src/data", to: `${output.path}/data` },
        {
          from: "src/favicon.ico",
          to: `${output.path}/data/favicon.ico`,
        },
        {
          from: "src/robots.txt",
          to: `${output.path}/robots.txt`,
        },
      ],
    }),
  ],
};
