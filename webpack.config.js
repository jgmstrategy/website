const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HWP({ template: path.join(__dirname, '/src/index.html') }),
  ],
};