let throttle = require('lodash.throttle');
import vimeoPlayer from '@vimeo/player';

const player = new vimeoPlayer(document.querySelector('#vimeo-player'));
const getTime = localStorage.getItem('videoplayer-current-time');

//  ========================================== branch 1
player.on('timeupdate', throttle(e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  console.log(e.seconds);}, 1000),);

player.setCurrentTime(getTime).catch(function (error) {
switch (error.name) {
  case 'RangeError':
    // the time was less than 0 or greater than the video’s duration
    break;
  default:
    // some other error occurred
    break;}
});
// ========================================== branch 2
// player.on('timeupdate', throttle(onPlay, 1000));

// if (getTime) {player.setCurrentTime(Number.parseFloat(getTime))};

// function onPlay(e) {localStorage.setItem('videoplayer-current-time',
//  e.seconds === e.duration ? 0 : e.seconds);
//  console.log(e.seconds);};
