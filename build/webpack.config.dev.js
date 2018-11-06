

import loaders from './config/loaders'
import alias from './config/alias'
import basePlugins from './config/basePlugins'
import devPlugins from './config/devPlugins'
import optimization from './config/optimization'
import entry from './config/entry'
import { envConfig } from './config/env'

export default {
  mode: 'development',
  context: `${process.cwd()}/src`,
  entry,
  optimization,
  devtool: 'source-map',
  output: {
    path: `${process.cwd()}/dist`,
    publicPath: envConfig.publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.scss'],
    alias
  },
  module: {
    rules: loaders
  },
  plugins: [...basePlugins,...devPlugins]
}
