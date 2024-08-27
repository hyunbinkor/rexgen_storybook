// webpack 번들링 설정을 배포용으로 설정해두기 위해서 설정 merge 메소드 불러오기
const { merge } = require('webpack-merge');
// 기본으로 지정해둔 webpack 번들링 설정 불러오기
const common = require('./webpack.common');

// 기본 설정에서 몇 가지 수정한 뒤 배포용으로 내보내기
module.exports = merge(common, {
  // whitespace 등 최대한 압축해서 가벼움에 초점을 맞춘 번들링 설정
  mode: 'production',
  // 이런 옵션이라는데.. 잘은 모르겠네요 "참조가 없으며, 에러 보고 목적으로 소스맵을 사용할 때 선택 할 수 있습니다."
  devtool: 'hidden-source-map',
});
