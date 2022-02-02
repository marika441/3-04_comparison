'use strict';

const number = Math.floor(Math.random() * 6);
// parseInt()でパラメータを整数に変換
const answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してください。'));
let message;
if(answer > 5) {
  message = '0〜5の数字を入力してください。';
} else if(answer === number) {
  message = 'あたり！';
} else if(answer < number) {
  message = '残念！もう少し大きいです！';
} else if(answer > number) {
  message = '残念！もう少し小さいです！';
} else {
  message = '0〜5の数字を入力してください。';
}
window.alert(message);