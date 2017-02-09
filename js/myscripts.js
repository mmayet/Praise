var thousandPoemAudio = document.getElementById('thousandPoemAudio');
thousandPoemAudio.addEventListener('play', function(e) {
    ga('send', 'event', '1000Poem', 'Click', 'Audio');
});