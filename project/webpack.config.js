const webpack = require('webpack')
module.exports =function (webpackConfig,env){
    //对poadhog默认配置进行操作 比如
  if(process.env.env ==='prod'){
    webpackConfig.plugins.push(new webpack.IgnorePlugin(/^vconsole$/))
  }
  return webpackConfig
}