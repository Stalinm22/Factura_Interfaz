
document.addEventListener('DOMContentLoaded', () => {
  const fechaActual = new Date();
  const fechaFormateada = fechaActual.toLocaleDateString('es-EC', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  });
  document.querySelectorAll('#fecha-actual').forEach(el => el.textContent = fechaFormateada);
});

// Coloca la fecha actual en el campo correspondiente
document.addEventListener("DOMContentLoaded", () => {
  const fecha = new Date();
  const formato = fecha.toLocaleDateString("es-EC", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  document.getElementById("fecha-actual").textContent = formato;
});
