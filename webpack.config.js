const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/index.js',
    'sustainability': './src/index.js'
  },
  output: {
    filename: '[name].js',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HWP({ template: path.join(__dirname, '/src/index.html') }),
    new HWP({
      filename: 'sustainability/index.html',
      template: path.join(__dirname, '/src/index.html')
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};