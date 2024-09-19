module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all', // Tüm ağlardan erişim izni verir
    proxy: {
      '/api': {
        target: 'http://217.160.138.215:5000/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
