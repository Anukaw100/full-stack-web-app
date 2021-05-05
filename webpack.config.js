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
    index: resolve(__dirname, "src", "home-page", "home.jsx"),
    parking: resolve(__dirname, "src", "parking-page", "parking.jsx"),
    ai: resolve(__dirname, "src", "ai-page", "ai.jsx"),
    product: resolve(__dirname, "src", "product-page", "product.jsx"),
    login: resolve(__dirname, "src", "login-page", "login.jsx"),
    signup: resolve(__dirname, "src", "signup-page", "signup.jsx"),
    account: resolve(__dirname, "src", "login-page", "account.jsx"),
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
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "state-of-parking", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "State of Parking - Parking Space Detector",
      inject: "body",
      chunks: ["parking"],
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "why-ai", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Why AI? - Parking Space Detector",
      inject: "body",
      chunks: ["ai"],
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "product", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Our Product - Parking Space Detector",
      inject: "body",
      chunks: ["product"],
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "login", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Login - Parking Space Detector",
      inject: "body",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "signup", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Signup - Parking Space Detector",
      inject: "body",
      chunks: ["signup"],
    }),new HtmlWebpackPlugin({
      filename: resolve(__dirname, "dist", "account", "index.html"),
      template: resolve(__dirname, "views", "index.html"),
      title: "Account - Parking Space Detector",
      inject: "body",
      chunks: ["account"],
    }),
  ],
};
