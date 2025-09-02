const {
  share,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],

  ...withModuleFederationPlugin({
    name: 'flights',

    exposes: {
      './Module': './src/app/flights/flights.module.ts',
    },

    shared: share({
      '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    }),
  }),
};
