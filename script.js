document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("card");
  const letter = document.getElementById("letter");
  const btn = document.getElementById("openBtn");

  btn.addEventListener("click", () => {
    card.classList.add("open");
    btn.style.display = "none"; // some o botão após abrir
  });
});
