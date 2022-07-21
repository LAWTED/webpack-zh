/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    'main': './src/index.js',
    'module1~main': './src/module-1/index.js',
    'module2~main': './src/module-2/index.js',
  },

  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].js',
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common~main',
          chunks: 'initial',
          minChunks: 1,
          minSize: 0
        },
        vendor: {
          name: 'vendors~main',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    },
  },
}
