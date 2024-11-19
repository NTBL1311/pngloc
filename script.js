// Lấy phần tử âm thanh và nút
const music = document.getElementById('background-music');
const playButton = document.querySelector('.play-button');

// Thêm sự kiện cho nút bấm
playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playButton.textContent = 'Dừng nhạc 🎵';
    } else {
        music.pause();
        playButton.textContent = 'Phát nhạc 🎵';
    }
});
