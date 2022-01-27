const webpack = require('webpack')
const path = require('path')

const config = {
  entry: './pack.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'chimeraProvider.js'
  },
  resolve: {
    fallback: {
      // stream: false,
      stream: require.resolve('stream-browserify')
      // buffer: require.resolve("buffer"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  target: 'web'
}

module.exports = config
