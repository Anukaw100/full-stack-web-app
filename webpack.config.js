// Inspired from [this blog post by Saboteur,
// J.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
// and [the webpack "Getting Started"
// guides](https://webpack.js.org/guides/getting-started/).

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "homepage", "index.jsx"),
  },
  // `publicPath' and `clean' options removed.
  // `publicPath' removed for debugging. `clean' option until files reordered. 
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type:"asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, "src", "common"),
      Images: path.resolve(__dirname, "public", "images"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "views", "homepage.html"),
    }),
  ],
};
