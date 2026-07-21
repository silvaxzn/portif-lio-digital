// Redirecionamento do Botão
document.getElementById('btn')?.addEventListener("click", () => window.location.href = "contato.html");

// Efeito Digitando no "Sobre mim"
const el = document.querySelector('.paragrafo-sobre');

if (el) {
  const base = "Olá, sou Arthur Silva Pereira, profissional com foco em ";
  const profs = ["Desenvolvimento Web.", "Design de Interfaces.", "UI/UX no Figma."];
  let i = 0, j = 0, del = 0;

  (function loop() {
    el.textContent = base + profs[i].slice(0, del ? j-- : j++);
    if (j > profs[i].length || j < 0) [del, j, i] = [!del, del ? 0 : profs[i].length, del ? (i + 1) % profs.length : i];
    setTimeout(loop, del && j === profs[i].length ? 1500 : del ? 40 : 80);
  })();
}
