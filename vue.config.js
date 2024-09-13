const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        http: require.resolve("stream-http"),
      },
    },
  },
  devServer: {
    proxy: 'https://capstone-wqf7.onrender.com',
  },
})
