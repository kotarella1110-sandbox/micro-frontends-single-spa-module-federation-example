const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { MFLiveReloadPlugin } = require("@module-federation/fmr");
const deps = require("./package.json").dependencies;

module.exports = () => ({
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".jsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MFLiveReloadPlugin({
      port: 9001,
      container: "reactApp",
      standalone: true,
    }),
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ReactApp": "./src/App",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    }),
  ],
  devServer: {
    port: 9001,
    historyApiFallback: true,
  },
});
