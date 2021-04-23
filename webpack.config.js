// Inspired from [this blog post by Saboteur,
// J.](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
// and [the webpack "Getting Started"
// guides](https://webpack.js.org/guides/getting-started/).

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "home-page", "home.jsx"),
    parking: path.resolve(__dirname, "src", "parking-page", "parking.jsx"),
    ai: path.resolve(__dirname, "src", "ai-page", "ai.jsx"),
    product: path.resolve(__dirname, "src", "product-page", "product.jsx"),
    login: path.resolve(__dirname, "src", "login-page", "login.jsx"),
    signup: path.resolve(__dirname, "src", "signup-page", "signup.jsx"),
  },
  // `publicPath' and `clean' options removed.
  // `publicPath' removed for debugging. `clean' option until files reordered.
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // TODO Add "externals" options in production code.
  mode: "development",
  devtool: 'inline-source-map',  // FIXME
  watchOptions: {
    ignored: [path.resolve(__dirname, "node_modules")],
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
      Common: path.resolve(__dirname, "src", "common"),
      Images: path.resolve(__dirname, "public", "images"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "Parking Space Detector",
      inject: "body",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "state-of-parking", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "State of Parking - Parking Space Detector",
      inject: "body",
      chunks: ["parking"],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "why-ai", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "Why AI? - Parking Space Detector",
      inject: "body",
      chunks: ["ai"],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "product", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "Our Product - Parking Space Detector",
      inject: "body",
      chunks: ["product"],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "login", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "Login - Parking Space Detector",
      inject: "body",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "signup", "index.html"),
      template: path.resolve(__dirname, "views", "index.html"),
      title: "Signup - Parking Space Detector",
      inject: "body",
      chunks: ["signup"],
    }),
  ],
};
