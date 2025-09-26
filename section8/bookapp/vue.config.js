const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  devServer: {
    host: "0.0.0.0", // ← コンテナ外からアクセス可能にする
    port: 8080,      // ← ポートを固定
    watchFiles: {
      paths: ["src/**/*", "public/**/*"],
      options: {
        usePolling: true,
        interval: 1000
      }
    }
  }
})
