

export default {
  splitChunks: {
    cacheGroups: {
      vendor: { 
        name: 'vendor',
        chunks: 'initial',
        priority: -10,
        minChunks: 2,
        reuseExistingChunk: true
      },
      common: {
        name: 'common',
        chunks: 'initial',
        minChunks: 2,
        test: /[\\/]src[\\/]/,
        priority: -5,
        reuseExistingChunk: true
      }
    }
  }
}
