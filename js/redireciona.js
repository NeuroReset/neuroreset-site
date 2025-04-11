document.addEventListener("DOMContentLoaded", function () {
    const botaoFake = document.querySelector(".botao-laranja.falso");
    const destino = document.getElementById("compra");
  
    if (botaoFake && destino) {
      botaoFake.addEventListener("click", function (e) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  