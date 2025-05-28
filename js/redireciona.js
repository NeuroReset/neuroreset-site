console.log(document.querySelectorAll(".cta-pulse")); // Ver se está pegando os botões

document.addEventListener("DOMContentLoaded", function () {
    const botaoFake = document.querySelectorAll(".cta-pulse");
    const destino = document.getElementById("redic");
    
    if (botaoFake.length && destino) {
      botaoFake.forEach(function (botao) {
        botao.addEventListener("click", function (e) {
          e.preventDefault();
          destino.scrollIntoView({ behavior: "smooth" });
        });
      });
    }
  });
  
  let totalTime = 5 * 60;
    const minutosEl = document.getElementById("minutos");
    const segundosEl = document.getElementById("segundos");

    const countdown = setInterval(() => {
      const minutos = Math.floor(totalTime / 60);
      const segundos = totalTime % 60;

      minutosEl.innerHTML = `${minutos.toString().padStart(2, '0')}<br><small>Minutos</small>`;
      segundosEl.innerHTML = `${segundos.toString().padStart(2, '0')}<br><small>Segundos</small>`;

      if (totalTime <= 0) {
        clearInterval(countdown);
        minutosEl.innerHTML = `00<br><small>Minutos</small>`;
        segundosEl.innerHTML = `00<br><small>Segundos</small>`;
      }

      totalTime--;
    }, 1000);
