const form = document.getElementById("form");
const input = document.getElementById("textInput");
const list = document.getElementById("list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const texto = input.value.trim();

  if (texto !== "") {
    const novoItem = document.createElement("li");
    novoItem.textContent = texto;
    list.appendChild(novoItem);

    input.value = "";
  }
});
