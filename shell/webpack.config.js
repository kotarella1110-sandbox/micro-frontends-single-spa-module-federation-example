const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { MFLiveReloadPlugin } = require("@module-federation/fmr");
const { dependencies } = require("./package.json");

module.exports = (_, argv) => {
  const isProduction = argv.mode == "production";
  return {
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
      !isProduction &&
        new MFLiveReloadPlugin({
          port: 9000,
          container: "shell",
          standalone: true,
        }),
      new ModuleFederationPlugin({
        name: "shell",
        filename: "remoteEntry.js",
        remotes: {
          reactApp: "reactApp@http://localhost:9001/remoteEntry.js",
        },
        shared: [
          {
            ...dependencies,
            react: {
              singleton: true,
              requiredVersion: dependencies.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: dependencies["react-dom"],
            },
          },
        ],
      }),
    ].filter(Boolean),
    devServer: {
      historyApiFallback: true,
    },
  };
};
