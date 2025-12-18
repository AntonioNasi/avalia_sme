// Data final (AAAA-MM-DDTHH:MM:SS)
  const dataFinal = new Date("2025-12-23T23:59:59");

  function atualizarContagem() {
    const agora = new Date();
    const diferenca = dataFinal - agora;

    if (diferenca <= 0) {
      document.getElementById("dias").textContent = "0";
      document.getElementById("horas").textContent = "0";
      document.getElementById("minutos").textContent = "0";
      document.getElementById("segundos").textContent = "0";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (diferenca % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor(
      (diferenca % (1000 * 60)) / 1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  }

  // Atualiza imediatamente
  atualizarContagem();

  // Atualiza a cada segundo
  setInterval(atualizarContagem, 1000);