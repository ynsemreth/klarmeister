module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 5000,
  },
  css: {
    extract: {
      filename: 'css/[name].css', // Tek bir CSS dosyasında toplar
      chunkFilename: 'css/[name].css', // CSS chunk dosyalarını adlandırır
      ignoreOrder: true,
    },
  },
  configureWebpack: {
    optimization: {
      // splitChunks özelliğini devre dışı bırakarak tüm JS ve CSS'i birleştiriyoruz
      splitChunks: false,
    },
    output: {
      filename: 'js/[name].js', // Tüm JS dosyaları tek bir bundle'da toplansın
      chunkFilename: 'js/[name].js', // Herhangi bir JS chunk dosyası da aynı isimlendirmeyi alacak
    },
  },
};
