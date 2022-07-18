// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다
// 2. 그 폴더안데 video, captured, duplicated 폴더를 만든다
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234)

const path = require('path'); // 경로를 사용하기 위해 path를 받아오기

const folder = process.argv[2]; // photo 폴더
if (!folder) {
  console.error('Please enter folder name in Pictures');
}

const workingDir = path.join(os.homedir(), 'Pictures', folder);
console.log(workingDir);
