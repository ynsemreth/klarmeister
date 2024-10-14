const path = require('path');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 5000,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  assetsDir: 'src/',
  css: {
    extract: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
      ignoreOrder: true,
    },
  },
  configureWebpack: {
    optimization: {
      splitChunks: false, 
    },
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
  },
};
