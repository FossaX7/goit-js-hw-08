import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(function() {
    player.getCurrentTime().then(function (sec) {
        console.log('title:', sec);
        localStorage.setItem('current-time', JSON.stringify(sec))
    });
}, 1000),
);

const toStart = JSON.parse(localStorage.getItem('current-time')) || 0;
console.log(toStart);
player.setCurrentTime(toStart);
