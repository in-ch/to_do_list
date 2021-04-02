//client를 잘 봐야하고, concatenated는 어쩔 수 없음. 
// 큰 박스 안에 작은 것들은 다 볼 수 있음. 그래서 그런 것들을 다 지워줄 수 있음. 
// 만약 moment.js안에 많은 다국어를 지우고 싶으면 구글에 moment locale tree shaking 이런 식으로 검색하면 됨. 


const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    compress: true,
    webpack(config, { webpack }) {
      const prod = process.env.NODE_ENV === 'production';
      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-source-map' : 'eval',
        plugins: [
          ...config.plugins,
          new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
        ],
      };
    },
  });