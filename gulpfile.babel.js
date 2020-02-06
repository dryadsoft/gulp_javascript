import gulp from "gulp";
import babel from "gulp-babel";

const routes = {
  js: {
    src: "src/**/*.js", // 대상 javascript파일
    dest: "build" // javascript파일이 컴파일되어서 생성되는 폴더
  }
};

const js = () =>
  gulp
    .src(routes.js.src) // 출발지
    .pipe(babel()) // babel을 이용하여 컴파일
    .pipe(gulp.dest(routes.js.dest)); // 목적지

export const dev = gulp.series(js); // package.json의 scripts에 작성한 "gulp dev" task
