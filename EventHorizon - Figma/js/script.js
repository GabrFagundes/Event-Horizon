const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const dataInput = document.getElementById("data");
const listaUsuarios = document.getElementById("listaUsuarios");
const btnAdicionar = document.getElementById("btnAdicionar");

btnAdicionar.addEventListener("click", () => {
const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const data = document.getElementById("data").value;  


  // Criar card
  const card = document.createElement("div");
  card.classList.add("user-card");

  card.innerHTML = `
    <div class="info">
      <strong>${nome}</strong><br>
      <span class="email">${email}</span><br>
      <span class="data">Data: ${data}</span>
    </div>

    <div class="botoes">
      <button class="editar">✏️</button>
      <button class="excluir">🗑️</button>
    </div>
  `;

  // Evento excluir
  card.querySelector(".excluir").addEventListener("click", () => {
    card.remove();
  });

  // Evento editar
  card.querySelector(".editar").addEventListener("click", () => {
    nomeInput.value = nome;
    emailInput.value = email;
    dataInput.value = data;
    card.remove(); // Remove o antigo, será re-adicionado atualizado
  });

  // Adicionar na lista
  listaUsuarios.appendChild(card);

  // Limpar campos
  nomeInput.value = "";
  emailInput.value = "";
  dataInput.value = "";
});
