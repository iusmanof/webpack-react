const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [ 
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          } 
        },
        {
          loader: 'sass-loader'
        },
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(|png|svg|jpg|jpeg|gif|ico)$/,
        type: 'asset',
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
}; 