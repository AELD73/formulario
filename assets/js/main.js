/* ============================================================
   Renderiza el menú de materias y la lista de formularios
   a partir de MATERIAS (assets/js/formularios-data.js).
   No es necesario tocar este archivo para publicar formularios.
   ============================================================ */

(function () {
  const tabsEl = document.getElementById("tabs");
  const titleEl = document.getElementById("panel-title");
  const libroRefEl = document.getElementById("panel-libro-ref");
  const bodyEl = document.getElementById("panel-body");

  function formatFecha(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    const meses = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
    return `${d} ${meses[parseInt(m, 10) - 1]} ${y}`;
  }

  function renderTabs(activeId) {
    tabsEl.innerHTML = "";
    MATERIAS.forEach((materia) => {
      const btn = document.createElement("button");
      btn.className = "tab" + (materia.id === activeId ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", materia.id === activeId ? "true" : "false");
      btn.innerHTML = `${materia.nombre}<span class="count">${materia.modulos.length}</span>`;
      btn.addEventListener("click", () => {
        window.location.hash = materia.id;
        renderPanel(materia.id);
        renderTabs(materia.id);
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderPanel(activeId) {
    const materia = MATERIAS.find((m) => m.id === activeId) || MATERIAS[0];

    titleEl.textContent = materia.nombre;
    libroRefEl.textContent = materia.capitulosLibro
      ? `Libro CONAMAT · ${materia.capitulosLibro} capítulos`
      : "";

    const disponibles = materia.modulos.filter((m) => m.disponible !== false);

    if (disponibles.length === 0) {
      bodyEl.innerHTML = `<div class="empty">Todavía no hay formularios publicados para ${materia.nombre}. Vuelve después del próximo sábado.</div>`;
      return;
    }

    const ordenados = [...disponibles].sort((a, b) => a.bloque - b.bloque);

    bodyEl.innerHTML = `<div class="grid">${ordenados
      .map(
        (mod) => `
        <a class="card" href="${mod.archivo}">
          <div class="num">${mod.bloque}<span>Bloque</span></div>
          <div>
            <h3>${mod.titulo}</h3>
            <div class="fecha">Actualizado ${formatFecha(mod.fecha)}</div>
          </div>
        </a>`
      )
      .join("")}</div>`;
  }

  const inicial = (window.location.hash || "").replace("#", "") || MATERIAS[0].id;
  const inicialValido = MATERIAS.some((m) => m.id === inicial) ? inicial : MATERIAS[0].id;

  renderTabs(inicialValido);
  renderPanel(inicialValido);
})();
