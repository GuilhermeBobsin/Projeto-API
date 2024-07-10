# Projeto API da NASA - Guilherme Bobsin

Este projeto utiliza a API pública da NASA para exibir imagens espaciais dinâmicas conforme a data selecionada pelo usuário. A interface é responsiva e visualmente atraente, projetada para dispositivos móveis e desktops.

## Funcionalidades

- Exibição de uma imagem espacial da NASA com base na data selecionada.
- Interface intuitiva com campo de seleção de data e botão de busca.
- Exibição das informações detalhadas da imagem, incluindo título, data e explicação.

## Como Executar

1. *Clone o repositório:*
   git clone https://github.com/seu-usuario/nasa-api-project.git
   cd nasa-api-project

2. *Execute a aplicação:*
    Abra o arquivo index.html diretamente no seu navegador preferido.

3. *Utilização:*
    Selecione uma data utilizando o campo de entrada.
    Clique no botão "Buscar" para carregar a imagem correspondente da NASA.

4. *Nota:*
    A API da NASA possui um limite de 10 requisições por segundo. Se você receber um erro de "429 Too Many Requests", tente novamente mais tarde.
    Certifique-se de que sua conexão com a internet está ativa para carregar os dados da API da NASA.
    No projeto, o demo_key foi utilizado como uma chave de demonstração para acessar a API da NASA. É importante ressaltar que essa chave é fornecida pela NASA para fins educacionais e de desenvolvimento inicial, mas não deve ser utilizada em produção ou projetos públicos de longo prazo, devido às limitações de uso e à possibilidade de restrições de acesso. Para ambientes de produção, é crucial obter uma chave de API válida e autorizada, seguindo as diretrizes da NASA e garantindo um acesso adequado e contínuo aos serviços oferecidos pela API.

# Tecnologias Utilizadas
    HTML
    CSS
    JavaScript (Fetch API para requisições HTTP)