document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    
    // Configurar volumen inicial
    audio.volume = 0.3;
    
    // Intentar reproducir inmediatamente
    audio.play().catch(function(error) {
        console.log("Error al reproducir:", error);
    });

    musicToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            audio.pause();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
}); 