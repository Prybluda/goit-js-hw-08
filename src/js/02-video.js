import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))
};
const throttled = throttle(onPlay, 1000)
player.on('timeupdate', throttled);

const currentTime = localStorage.getItem("videoplayer-current-time");
const parsedCurrentTime = JSON.parse(currentTime);

player.setCurrentTime(parsedCurrentTime);