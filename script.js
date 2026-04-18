// Kontrol Amplop
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

// Kontrol Musik (Update agar UI aktif merespons klik)
const audioPlayer = document.getElementById('mainAudio');

function playAudio(fileName, element) {
    const allItems = document.querySelectorAll('.song-item');
    
    // Jika lagu yang sama diklik (toggle Play/Pause)
    if (audioPlayer.src.includes(fileName)) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            element.classList.add('active');
        } else {
            audioPlayer.pause();
            element.classList.remove('active');
        }
    } else {
        // Ganti lagu baru
        audioPlayer.src = fileName;
        audioPlayer.play();
        
        // Update UI agar item lagu yang aktif berubah
        allItems.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }
}