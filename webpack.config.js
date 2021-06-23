// Inspired from [this blog post by Saboteur,
// J.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
// and [the webpack "Getting Started"
// guides](https://webpack.js.org/guides/getting-started/).

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// required in ES6 modules.
const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: {
    index: resolve(__dirname, "src", "index.jsx"),
  },
  // `publicPath' and `clean' options removed.
  // `publicPath' removed for debugging. `clean' option until files reordered.
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  // TODO Add "externals" options in production code.
  mode: "development",
  devtool: 'inline-source-map',  // FIXME
  watchOptions: {
    ignored: [resolve(__dirname, "node_modules")],
    aggregateTimeout: 500,
  },
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
      Common: resolve(__dirname, "src", "common"),
      Images: resolve(__dirname, "public", "images"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Parking Space Detector",
      inject: "body",
      chunks: ["index"],
    }),
  ],
};
