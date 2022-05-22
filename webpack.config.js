const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index_bundle.js',
  },
  devServer: {
    port: 8001,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: ['babel-loader'],
        exclude: '/node-modules',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}

module.exports = config
