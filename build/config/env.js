import {argv} from 'yargs'; //可以拿到npm run命令中的字段

// 环境：test|beta|prod，默认prod
export const envName = ['dev', 'test', 'beta', 'prod1'].find(e => argv[e])

export const envConfig = {
  dev: {
    publicPath: '/'
  },
  test: {
    publicPath: '//m.test.elineprint.com/'
  },
  beta: {
    publicPath: '//m.test.elineprint.com/'
  },
  prod1: {
    publicPath: '//m.elineprint.com/'
  }
}[envName]
