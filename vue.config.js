// vue.config.js

module.exports = {
  chainWebpack: config => {
    // axios를 전역으로 사용할 수 있도록 설정합니다.
    config.resolve.alias.set('axios', 'axios');

    // 필요에 따라 추가적인 webpack 설정을 할 수 있습니다.
  }
};