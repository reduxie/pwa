const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: './bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      // BABEL
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",

            ],
          }

        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
    ],

  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000/',
      "changeOrigin": true,
      // pathRewrite: { '^/api': '' }
    },
    publicPath: '/build/'
    // contentBase: path.join(__dirname, 'build'),
    // compress: true,
    // port: 8080
  }
}