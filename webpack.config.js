"use strict";

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const GasPlugin = require("gas-webpack-plugin");
const projectsPath = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: `${projectsPath}/index.ts`,
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/appsscript.json`,
          to: `[name][ext]`,
        },
      ],
    }),
    new GasPlugin(),
  ],
};
