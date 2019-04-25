const path = require('path')

const config = {
  entry: ['@babel/polyfill', path.join(__dirname, './src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          rootMode: "upward"
        }
      }

    ]
  },
  mode: "development"
}

module.exports = config
