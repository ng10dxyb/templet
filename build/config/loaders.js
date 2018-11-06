
import MiniCssExtractPlugin from 'mini-css-extract-plugin' //从js分离出css,代替ExtractTextPlugin,webpack4官方推荐,支持非入口文件的css异步加载
import eslintFriendlyFormatter from 'eslint-friendly-formatter'
import { envName } from './env.js'

function postcssPlugins() {
  return {
    plugins() {
      return [
        require('autoprefixer')({
            browsers: ['last 2 version', 'iOS >= 7', 'Android >= 4', 'not ie < 9']
        })
      ]
    }
  }
}

export default [
  {
    test: /\.(le)ss$/,
    include: [ //可以是正则也可以是路径字符串的数组
      /src/,
      /muse-ui/
    ],
    //exclude: /node_modules/, //排除node_modules,mint-ui引入单独文件时不能排除掉
    use: [
      {
        loader: envName == 'dev' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: postcssPlugins()
      }, {
        loader: 'less-loader'
      }
    ]
  },
  {
    test: /\.vue$/,
    exclude: /node_modules/,
    use: {
      loader: 'vue-loader'
    }
  }, { //模块规则
    test: /\.js$/, //匹配文件
    exclude: /node_modules/, //排除node_modules
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: false
      }
    }
  }, {
    test: /\.(sa|sc|c)ss$/,
    exclude: /node_modules/, //排除node_modules
    use: [
      {
        loader: envName !== 'prod' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: postcssPlugins()
      }, {
        loader: 'sass-loader'
      }
    ]
  }, {
    test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf|jpeg|zip|pdf)$/,
    use: [{
      loader: 'file-loader',
      options:{
        name: 'images/[name]_[sha512:hash:base64:7].[ext]'
      }
    }]
  }
]
