const { resolve } = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const isProduction =
  ["development", "staging"].indexOf(process.env.NODE_ENV) === -1

module.exports = {
  entry: resolve("src", "index.jsx"),
  output: {
    path: resolve("dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
    alias: {
      "~": resolve("src"),
    },
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]---[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: isProduction ? false : "cheap-module-eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  mode: isProduction ? "production" : "development",
  devServer: {
    historyApiFallback: true,
  },

  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
  },
}
