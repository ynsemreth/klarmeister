module.exports = {
  devServer: {
    host: '0.0.0.0', // Dış IP'lerden erişimi sağlamak için
    port: 5000,      // 5000 portunda çalışması için
    proxy: {
      '/api': {
        target: 'http://217.160.138.215:5000/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
    disableHostCheck: true, // Bazı ağ problemlerini çözmek için
  },
};

