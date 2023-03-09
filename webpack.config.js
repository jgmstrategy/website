const path = require('path');
const fs = require('fs');
const HWP = require('html-webpack-plugin');

const insights = fs.readdirSync('./src/pages').map((file) => file.split('.')[0]);
const pages = [
  'about',
  'accessibility',
  'careers',
  'industries',
  'insights',
  'privacy',
  'services',
  'sustainability',
  'terms',
];

module.exports = {
  entry: {
    'index': './src/index.js',
    ...pages.reduce((acc, curr) => (
      {
        ...acc,
        [curr]: './src/index.js'
      }
    ), {}),
    ...insights.reduce((acc, curr) => (
      {
        ...acc,
        [`insights/${curr}`]: './src/index.js'
      }
    ), {})
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
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
      {
        test: /\.md$/,
        use: ['babel-loader', 'mdx-loader']
      }
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
    ...insights.map(insight => (
      new HWP({
        filename: `insights/${insight}/index.html`,
        template: path.join(__dirname, '/src/index.html')
      })
    )),
  ],
  devServer: {
    historyApiFallback: true,
  },
};