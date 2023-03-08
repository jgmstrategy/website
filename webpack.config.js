const path = require('path');
const HWP = require('html-webpack-plugin');

const pages = [
  'accessibility',
  'sustainability',
  'terms',
  'privacy',
];

module.exports = {
  entry: {
    'index': './src/index.js',
    ...pages.reduce((acc, curr) => (
      {
        ...acc,
        [curr]: './src/index.js'
      }
    ), {})
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
    ...pages.map(page => (
      new HWP({
        filename: `${page}/index.html`,
        template: path.join(__dirname, '/src/index.html')
      })
    )),
  ],
  devServer: {
    historyApiFallback: true,
  },
};