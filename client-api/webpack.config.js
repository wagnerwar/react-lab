const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
    entry: "./src/index.jsx",
    output: {
      filename: "./bundle.js",
      path: __dirname + '/public',
    },
    mode: 'development',
    devServer: {
        port: 8080,
        static: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    module: {
      rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: ['@babel/transform-class-properties']
          }
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }, {
            test: /\.(scss)$/,
            use: [
              {
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
              },
              {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
              },
              {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      autoprefixer
                    ]
                  }
                }
              }
            ]
          }
      ]
    }
  }