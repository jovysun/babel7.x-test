const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const config = {
  entry: ['@babel/polyfill', path.join(__dirname, './src/index.js'), './packages/mod2/src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]
  },
  mode: "development",
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: '/dist/index.html'
    },
    hot: true
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}

module.exports = config
