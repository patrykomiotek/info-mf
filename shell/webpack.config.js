const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         'css-loader',
  //         'postcss-loader', // Ensure postcss-loader is used for Tailwind
  //       ],
  //     },
  //   ],
  // },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  ...withModuleFederationPlugin({
    remotes: {
      flights: 'http://localhost:4203/remoteEntry.js',
      cart: 'http://localhost:4204/remoteEntry.js',
    },

    shared: share({
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    }),
  }),
};
