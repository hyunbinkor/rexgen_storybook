// window와 unix 계열의 경로를 수용하기 위함
const path = require('path');
// webpack 번들링 설정을 개발 환경용 설정해두기 위해서 설정 merge 메소드 불러오기
const { merge } = require('webpack-merge');
// 기본으로 지정해둔 webpack 번들링 설정 불러오기
const common = require('./webpack.common.js');

// 기본 설정에서 몇 가지 수정한 뒤 개발 환경용으로 내보내기
module.exports = merge(common, {
  // 가시성이 좋은 번들 파일 생성
  mode: 'development',
  // source-map 빌드와 리빌드를 단순화 해 HMR 가속화
  devtool: 'eval',
  // 로컬 개발 서버 설정
  devServer: {
    // SPA에서 모든 uri에 대해 index.html을 반환하도록 설정
    historyApiFallback: true,
    // localhost:8080에서 실행할 파일 경로 설정
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // 8080 포트 대신 3000 포트 사용 설정
    port: 3001,
    // HMR 지원하도록 설정
    hot: true,
  },
});