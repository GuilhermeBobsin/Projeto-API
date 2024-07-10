
// Função para buscar dados na API da NASA
function searchNASA() {
    // Obtém a data inserida pelo usuário a partir do input com id 'data'
    const date = document.getElementById('data').value;
    // Constrói a URL da API da NASA com a chave de API DEMO_KEY e a data fornecida
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

    // Limpa os resultados anteriores para evitar sobreposição
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Faz uma requisição GET para a URL construída utilizando fetch
    fetch(url)
        .then(response => {
            // Verifica se a resposta da requisição é bem-sucedida (status 200-299)
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados da API da NASA'); // Lança um erro se a resposta não for bem-sucedida
            }
            return response.json(); // Converte a resposta para JSON e a retorna para o próximo then
        })
        .then(data => {
            // Cria o HTML do card com os dados recebidos da API
            const cardHTML = `
                <div class="result-card">
                    <img src="${data.url}" alt="${data.title}">
                    <div class="info">
                        <h2>${data.title}</h2>
                        <p>${data.explanation}</p>
                        <p>Data: ${data.date}</p>
                    </div>
                </div>
            `;
            // Insere o HTML do card na div de resultados
            resultadosDiv.innerHTML = cardHTML;
        })
        .catch(error => {
            // Captura e trata qualquer erro ocorrido durante a requisição ou processamento
            console.error('Erro:', error); // Registra o erro no console
            // Exibe uma mensagem de erro na div de resultados, caso ocorra um problema
            resultadosDiv.innerHTML = '<p>Erro ao buscar os dados da API da NASA. Verifique sua conexão ou a data inserida.</p>';
        });
}
document.getElementById('buscar').addEventListener('click', buscarImagem);

function buscarImagem() {
    const data = document.getElementById('data').value;
    if (!data) {
        alert('Por favor, selecione uma data.');
        return;
    }
    const apiKey = 'DEMO_KEY'; 
    fetch(`https://api.nasa.gov/planetary/apod?date=${data}&api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            exibirResultados(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function exibirResultados(imagem) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${imagem.url}" alt="Imagem do dia da NASA">
        <h2>${imagem.title}</h2>
        <p><strong>Data:</strong> ${imagem.date}</p>
        <p><strong>Descrição:</strong> ${imagem.explanation}</p>
    `;
    resultados.appendChild(card);
}
