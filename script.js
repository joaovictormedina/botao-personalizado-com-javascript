// Seleciona o botão
const button = document.getElementById('customButton');

// Adiciona um evento de clique ao botão
button.addEventListener('click', function() {
    // Altera a cor de fundo e o texto do botão
    button.style.backgroundColor = '#ff5722';
    button.innerHTML = 'Clicado!';
    
    // Aplica uma transformação ao botão
    button.style.transform = 'scale(1.1)';

    // Volta ao estado inicial após 300ms
    setTimeout(function() {
        button.style.backgroundColor = '#4CAF50';
        button.innerHTML = 'Clique em mim!';
        button.style.transform = 'scale(1)';
    }, 300);
});