function atualizartempo() {
    const display = document.querySelector('.display');
    const agora = new Date();
    const horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes())
        + ':' + corrigirHorario(agora.getSeconds());

    display.textContent = horario;
}

function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

// Animação da imagem
const animatedImage = document.getElementById('animatedImage');
let position = 0;

function animateImage() {
    position += 2; // Move 2 pixels por frame
    if (position > window.innerWidth - animatedImage.width) {
        position = 0; // Reinicia a animação quando chega ao final
    }
    animatedImage.style.left = position + 'px';
    requestAnimationFrame(animateImage);
}

animateImage(); // Inicia a animação
atualizartempo();
setInterval(atualizartempo, 1000);
