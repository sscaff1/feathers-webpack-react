const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?http://localhost:3030/',
    'webpack/hot/only-dev-server',
    './app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: [
          { loader: 'react-hot-loader' },
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: ['.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
