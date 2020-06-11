require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = (env) => {
  const config = {
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/graphql': process.env.SERVE_HEY_FRIEND,
      },
    },
    devtool: '#eval-source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:3000/',
      './src/app.jsx',
    ],
    output: {
      publicPath: '/',
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          exclude: [
            /node_modules/,
            /dist/,
            /coverage/,
          ],
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            query: { compact: false },
          },
        },
        {
          exclude: [
            /node_modules/,
            /dist/,
            /coverage/,
          ],
          test: /\.graphql$/,
          loader: 'graphql-tag/loader',
        },

        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      autoprefixer,
    ],
  };

  if (env && env.GRAPHQL_MOCK) {
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(
      /graphql\/http-link.js/,
      './schema-link.js'
    ));
  }

  return config;
};
