function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos//
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
      section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar o nome ou gênero do jogo.<p>"
      return
    };

    console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados formatados//
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
    if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
    // Itera sobre cada resultado da pesquisa//
    
      resultados += `<div class="item-resultado">
        <h2><a href=${dado.link} target="_blank">${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
      </div>`;
    };
  };
  if (!resultados){
    resultados = "<p>Nenhum resultado foi encontrado. <p>"
  }
  
    // Atualiza o conteúdo da seção com os resultados formatados //
    section.innerHTML = resultados;
  };
