const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/static/dist' : 'http://localhost:8080',
  outputDir: '../kudelasz/static/dist',
  indexPath: '../../templates/base-vue.html',

  devServer: {
    hot: 'only',
    headers: {'Access-Control-Allow-Origin': '*'},
    devMiddleware: {
        publicPath: 'http://localhost:8080',
        writeToDisk: true
    }
  }
})
