// Função para alternar a exibição do menu suspenso (dropdown)
function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu"); // Obtém o elemento com o ID 'dropdownMenu'
  // Alterna o estilo 'display' do menu entre 'block' e 'none' (abre e fecha o menu)
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}
// Evento para fechar o menu suspenso se o usuário clicar fora dele
window.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("dropdownMenu"); // Obtém o menu suspenso
  // Verifica se o elemento clicado NÃO é o ícone de perfil que abre o menu suspenso
  if (!event.target.matches(".profile-img")) {
    dropdownMenu.style.display = "none"; // Fecha o menu suspenso ao clicar fora
  }
});
// Função para alternar o modo escuro no body do documento
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode"); // Alterna a classe 'dark-mode' no elemento <body>
  // Atualiza o ícone do botão conforme o modo ativado (escuro ou claro)
  const darkModeButton = document.getElementById("darkModeToggle"); // Obtém o botão de alternância
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.innerHTML = '<img src="sun.png" alt="Sol">'; // Imagem do sol no modo escuro
} else {
    darkModeButton.innerHTML = '<img src="moon.png" alt="Lua">'; // Imagem da lua no modo claro
}
}
// Adiciona um evento de clique ao botão que alterna o modo escuro
document
  .getElementById("darkModeToggle")
  .addEventListener("click", toggleDarkMode);
  