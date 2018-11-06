
import webpack from 'webpack'
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer' //可视化查看打包后的文件

export default [
  new webpack.HotModuleReplacementPlugin(),
  //new BundleAnalyzerPlugin(), //可视化查看打包后的文件
]
