/* ============================================================
   MANIFIESTO DE FORMULARIOS
   ------------------------------------------------------------
   Aquí se registra cada materia del diplomado y los bloques
   que ya tienen formulario publicado.

   Para subir un nuevo formulario:
   1. Crea el archivo HTML dentro de /formularios
      (puedes copiar uno existente como plantilla).
   2. Agrega un objeto dentro del arreglo "modulos" de la
      materia correspondiente, con estos campos:

        {
          bloque: 6,                              // número de bloque
          titulo: "Potenciación y Radicación",     // tema del bloque
          archivo: "formularios/aritmetica-bloque-6.html",
          fecha: "2026-07-31",                     // AAAA-MM-DD
          disponible: true                         // false = "próximamente"
        }

   3. Sube los cambios a GitHub. La página de inicio se
      actualiza sola, no hay que tocar index.html.
   ============================================================ */

const MATERIAS = [
  {
    id: "aritmetica",
    nombre: "Aritmética",
    capitulosLibro: 11,
    modulos: [
      {
        bloque: 6,
        titulo: "Potenciación y Radicación",
        archivo: "formularios/aritmetica-bloque-6.html",
        fecha: "2026-07-31",
        disponible: true
      }
    ]
  },
  {
    id: "algebra",
    nombre: "Álgebra",
    capitulosLibro: 17,
    modulos: []
  },
  {
    id: "geometria-trigonometria",
    nombre: "Geometría y Trigonometría",
    capitulosLibro: 17,
    modulos: []
  },
  {
    id: "geometria-analitica",
    nombre: "Geometría Analítica",
    capitulosLibro: 13,
    modulos: []
  },
  {
    id: "calculo-diferencial",
    nombre: "Cálculo Diferencial",
    capitulosLibro: null,
    modulos: []
  },
  {
    id: "calculo-integral",
    nombre: "Cálculo Integral",
    capitulosLibro: null,
    modulos: []
  }
];
