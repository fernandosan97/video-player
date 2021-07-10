const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('playyy')
}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    console.log('pause')
}

function handleBackward() {
    $video.currentTime = $video.currentTime - 10;
    console.log('para atras 10 seg')
}

function handleForward() {
    $video.currentTime = $video.currentTime + 10;
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', habdleTimeUpdate);

function handleLoaded() {
    $progress.max = parseInt($video.duration);
}

function habdleTimeUpdate() {
    $progress.value = parseInt($video.currentTime) // establece el valor actual del video  el tiempo
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = parseInt($progress.value);
    console.log($video.currentTime)
}