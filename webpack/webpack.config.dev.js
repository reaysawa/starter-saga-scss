const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = require("./webpack.config.js")

module.exports = Object.assign({}, config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: "3000",
    historyApiFallback: true,
    hot: true,
    clientLogLevel: "none",
    contentBase: path.join(config.context, "assets")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
})
