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
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    inline: true,
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
    extensions: ['.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
