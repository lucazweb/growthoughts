const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: 'public/js',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /\node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              module: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    static: {
      directory: './public',
    },
    devMiddleware: {
      writeToDisk: true,
    },
    liveReload: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
