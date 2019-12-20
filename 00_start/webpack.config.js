const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const basePath = __dirname;

module.exports = {
  mode: "development",
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: ["./main.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "minimal"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
};
