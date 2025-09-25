const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    users: {
      entry: 'src/users/main.js',
      template: 'public/users.html',
      filename: 'users.html',
      title: 'Users Page',
      chunks: ['chunk-vendors', 'chunk-common', 'users']
    },
  },
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
