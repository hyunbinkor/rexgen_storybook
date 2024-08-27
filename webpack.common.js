// 기본적인 webpack 번들링 설정
// window와 unix 계열의 경로를 수용하기 위함
const path = require("path");
// 번들링 후 생성된 js를 import하는 html을 자동으로 생성하는 plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.resolve(__dirname, "src"));

module.exports = {
  // 기본 출력을 읽기 편한 개발모드로 설정
  mode: "development",
  // webpack의 번들링 시작 지점 설정
  entry: "./src/index.tsx",
  // webpack의 번들링 된 파일들을 위치시킬 경로 설정
  output: {
    // 만들어질 번들 파일 이름 설정
    filename: "bundle.js",
    // 만들어질 경로(폴더) 위치 설정 [path모듈로 작업 경로 읽고 dist 이름 지정]
    path: path.resolve(__dirname, "dist"),
    // 번들링 시에 이전에 생성된 파일 삭제 여부
    clean: true,
  },
  // 모듈(파일)을 해석하는 방식에 대해 설정
  resolve: {
    // 확장자가 명시되어 있지 않은 파일에 추정할 확장자 지정
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // @ 기호로 src인 것을 대체
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  // webpack에 추가적으로 설정한 loader에 대해서 설정
  module: {
    rules: [
      // loader에 대한 규칙 설정
      {
        // ts-loader를 적용할 확장자 정규표현식으로 설정
        test: /\.(js|jsx|ts|tsx)$/i,
        // node_module 내의 파일을 loader를 적용하지 않도록 설정
        exclude: /node_modules/,
        // 사용할 loader 설정
        use: {
          loader: "ts-loader",
        },
      },
      // {
      //   // style-loader, css-loader를 적용할 확장자 정규표현식으로 설정
      //   test: /\.css$/i,
      //   // 사용할 loader 설정
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   // file-loader를 적용할 확장자 정규표현식으로 설정
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   // 사용할 loader 설정
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[ext]",
      //   },
      // },
    ],
  },
  // webpack에 추가적으로 설정한 plugin에 대해서 설정
  plugins: [
    // 번들 이후 자동적으로 html 생성
    new HtmlWebpackPlugin({
      // 번들 이후에 번들된 파일을 읽어들일 html의 경로 설정
      template: "./public/index.html",
    }),
  ],
  // source-map을 어떻게 그릴지에 대한 규칙 설정
  devtool: "inline-source-map",
  // 로컬 개발 서버 설정
  devServer: {
    // localhost:8080에서 실행할 파일 경로 설정
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // HMR 제공 여부 설정
    hot: true,
    // 서버 시작 후 브라우저 열지에 대한 설정
    open: true,
  },
};
