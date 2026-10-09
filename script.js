const listaAtores = document.getElementById("lista-atores");
const mensagem = document.getElementById("mensagem");

// transforma "1979-08-27" em "27/08/1979"
function formatarData(data) {
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

// recebe um array de atores e monta os cards na tela
function mostrarAtores(lista) {
  listaAtores.innerHTML = "";

  lista.forEach((ator) => {
    listaAtores.innerHTML += `
      <div class="card">
        <img src="${ator.foto}" alt="${ator.nome}">
        <div class="info">
          <h2>${ator.nome}</h2>
          <p>País: ${ator.pais}</p>
          <p>Nascimento: ${formatarData(ator.nascimento)}</p>
        </div>
      </div>
    `;
  });

  if (lista.length === 0) {
    mensagem.innerText = "Nenhum ator ou atriz encontrado com esse nome.";
  } else {
    mensagem.innerText = lista.length + " ator(es) e atriz(es) encontrados";
  }
}

// chamada pelo oninput: filtra pelo nome digitado
function filtrarAtores() {
  const texto = document.getElementById("busca").value.toLowerCase();

  const filtrados = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(texto)
  );

  mostrarAtores(filtrados);
}

mostrarAtores(atores);
