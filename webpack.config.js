const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname,'src'),
  entry: {
    main:'./js/index.js',
    style: './scss/style.scss'
  }, 

  output: {
    filename:'[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
}


plugins: [
  new HTMLWebpackPlugin({
    filename: './pages/index.html',
    template: './src/html/index.html',
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
  }), 

]

module: {
  rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
       MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],     
    },
  ]
}
