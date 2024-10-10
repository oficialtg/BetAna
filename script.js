// Obtém todos os botões de aposta
const botoesAposta = document.querySelectorAll('.apostar-btn');

// Adiciona um evento de clique a cada botão
botoesAposta.forEach(botao => {
    botao.addEventListener('click', function() {
        const partidaId = this.getAttribute('data-partida');
        // Obtém as odds da partida selecionada
        const odds = Array.from(this.parentElement.querySelectorAll('.valor'))
                           .map(span => span.getAttribute('data-valor'));
        
        alert(`Você apostou na Partida ${partidaId} odd:\nOdd selecionada: ${odds[0]}`);
        
        // Aqui você pode enviar as informações para um servidor ou processar a aposta
        // Exemplo de requisição para um servidor (descomente se estiver implementando backend)
        
        fetch('/api/fazer-aposta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ partidaId, odds }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Aposta realizada com sucesso!`);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
        
    });
});
