const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

let config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'index_bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8081',
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['babel-loader', 'ts-loader'],
        exclude: '/node-modules',
      },
      {
        test: /\.module\.scss$/,
        sideEffects: true,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /(?<!module)\.scss$/,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {},
          },
          'url-loader',
        ],
      },

      {
        test: /\.png$/i,
        issuer: /\.[jt]sx?$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
  },
  resolve: {
    alias: {
      '#components': path.resolve(process.cwd(), 'src/components'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './bundle.css',
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}

module.exports = config
