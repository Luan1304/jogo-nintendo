## Aplicação de Busca de Jogos Nintendo Switch

### Descrição
Esta aplicação web permite aos usuários pesquisar por jogos do Nintendo Switch, filtrando os resultados por nome ou gênero. A busca é realizada em tempo real, à medida que o usuário digita no campo de pesquisa.

### Tecnologias Utilizadas
* **HTML:** Estrutura básica da página, definindo os elementos da interface do usuário.
* **CSS:** Estilização da página, definindo a aparência visual dos elementos.
* **JavaScript:** Lógica da aplicação, responsável por:
    * Capturar o termo de pesquisa do usuário.
    * Filtrar os dados dos jogos.
    * Renderizar os resultados na página.
* **dados.js:** Arquivo JSON contendo os dados dos jogos, como título, descrição, tags e link.

### Funcionamento
1. **Pesquisa:** O usuário digita um termo de pesquisa no campo fornecido e clica no botão "Pesquisar" ou pressiona Enter.
2. **Filtragem:** A função `pesquisar()` em `app.js` recebe o termo de pesquisa e percorre os dados dos jogos, verificando se o termo ocorre no título, descrição ou tags de cada jogo.
3. **Exibição de Resultados:** Os jogos que correspondem à pesquisa são adicionados a uma string HTML, que é então atribuída ao elemento `resultados-pesquisa`.
4. **Nenhum Resultado:** Se nenhum jogo for encontrado, uma mensagem informativa é exibida.

### Como Utilizar
1. **Clonar o repositório:** Clone este repositório para sua máquina local.
2. **Abrir os arquivos:** Abra os arquivos `index.html`, `style.css`, `dados.js` e `app.js` em um editor de código.
3. **Abrir no navegador:** Abra o arquivo `index.html` em um navegador web.
4. **Pesquisar:** Digite o nome ou gênero do jogo que você deseja encontrar e pressione Enter.

### Estrutura de Arquivos
* `index.html`: Página principal da aplicação.
* `style.css`: Arquivo de estilos CSS.
* `dados.js`: Arquivo JSON com os dados dos jogos.
* `app.js`: Arquivo JavaScript com a lógica da aplicação.
* `README.md`: Este arquivo.
