$(document).ready(function () {
    var socialLinksHeight = $('#social-links').outerHeight();
    var loginHeight = $('#login').outerHeight();
    var gap = 10; // промежуток между блоками


    // Установка промежутка между блоками
    $('#login').css('top', socialLinksHeight + gap);

    // Установка высоты родительского элемента
    var parentHeight = socialLinksHeight + loginHeight + gap;
    $('#social-links').parent().css('height', parentHeight);
});
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('#background-video');
    const playPauseButton = document.querySelector('#play-pause');
    const muteUnmuteButton = document.querySelector('#mute-unmute');

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    function toggleMuteUnmute() {
        if (video.muted) {
            video.muted = false;
            muteUnmuteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteUnmuteButton.textContent = 'Unmute';
        }
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    muteUnmuteButton.addEventListener('click', toggleMuteUnmute);
});