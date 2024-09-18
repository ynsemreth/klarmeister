module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://217.160.138.215:8080/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
