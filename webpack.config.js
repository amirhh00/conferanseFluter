const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const cssnext = require("postcss-cssnext");

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'app/js/main.js',
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          // presets: [ '@babel/preset-env', 'react', 'minify' ],
          presets: ['@babel/react', '@babel/preset-env'],
          plugins: ['@babel/proposal-class-properties']
        },
      },
      {
        test: /\.(svg)$/i,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: 'app/assets/img/[name].[ext]',
              limit: 4096
            }
          },
          'img-loader'
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [
                  cssnext
                ];
              }
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app/css/[name].css",
    }),
    new OpenBrowserPlugin({ url: 'http://localhost/', browser: "chrome" }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'main',
          test: /\.(sa|sc|c)ss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
};
