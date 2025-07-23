<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Malla Derecho - Interactiva</title>
  <link rel="stylesheet" href="estilos.css" />
</head>
<body>
  <h1>Malla Curricular Derecho</h1>
  <div id="malla" class="malla"></div>

  <script>
const ramos = {
  // Primer Año
  "Introducción al Derecho I": { requisitos: [], abre: ["Derecho Civil I", "Derecho Constitucional I", "Introducción al Derecho II"] },
  "Historia del Derecho I": { requisitos: [], abre: ["Historia del Derecho II"] },
  "Introducción a la Economía": { requisitos: [], abre: ["Área Especializada de Derecho Económico I"] },
  "Filosofía moral": { requisitos: [], abre: ["\u00c1rea Especializada de Ciencias del Derecho"] },
  "Electivo Abierto": { requisitos: [], abre: [] },
  "Libre/Cfg": { requisitos: [], abre: [] },
  "Ingles I": { requisitos: [], abre: ["Ingles II"] },
  "Introducción al Derecho II": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Procesal I", "Derecho Constitucional II", "Derecho Civil II", "Derecho Internacional Público", "Área Especializada de Ciencias del Derecho"] },
  "Área Especializada de Derecho Económico I": { requisitos: ["Introducción a la Economía"], abre: ["Regulación de Mercados"] },
  "Historia del Derecho II": { requisitos: ["Historia del Derecho I"], abre: ["\u00c1rea Especializada de Ciencias del Derecho", "\u00c1rea especializada de Derechos Humanos"] },
  "Derecho Civil I": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Civil II"] },
  "Derecho Constitucional I": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Procesal I", "Derecho Constitucional II", "Derecho Internacional Público", "Regulación de Mercados"] },
  "Ingles II": { requisitos: ["Ingles I"], abre: ["Ingles III"] },
  // Segundo Año
  "Derecho Procesal I": { requisitos: ["Introducción al Derecho II", "Derecho Constitucional I"], abre: ["Derecho Procesal II", "Derecho Constitucional III", "\u00c1rea especializada de Derechos Humanos"] },
  "Derecho Constitucional II": { requisitos: ["Derecho Constitucional I", "Introducción al Derecho II"], abre: ["Penal I", "Derecho Constitucional III", "\u00c1rea Especializada de Derechos Humanos"] },
  "Derecho Civil II": { requisitos: ["Derecho Civil I", "Introducción al Derecho II"], abre: ["Derecho Civil III", "Regulación de Mercados", "\u00c1rea especializada de Derecho Internacional"] },
  "Derecho Internacional Público": { requisitos: ["Derecho Constitucional I", "Introducción al Derecho II"], abre: ["\u00c1rea Especializada de Derechos Humanos", "Derecho Internacional Privado", "\u00c1rea especializada de Derecho Internacional"] },
  "Ingles III": { requisitos: ["Ingles II"], abre: ["Ingles IV"] },
  "Derecho Procesal II": { requisitos: ["Derecho Procesal I"], abre: ["Derecho Procesal III"] },
  "Derecho Civil III": { requisitos: ["Derecho Civil II"], abre: ["Derecho Civil IV", "Derecho del trabajo I"] },
  "Derecho Penal I": { requisitos: ["Derecho Constitucional II"], abre: ["Penal II"] },
  "Derecho Constitucional III": { requisitos: ["Derecho Constitucional II", "Derecho Procesal I"], abre: ["Derecho Administrativo I", "Derecho del Trabajo I", "\u00c1rea especializada de Derecho Internacional"] },
  "Regulación de Mercados": { requisitos: ["Derecho Constitucional I", "Derecho Civil II", "\u00c1rea Especializada de Derecho Económico I"], abre: ["Derecho Ambiental", "\u00c1rea especializada de Derecho Económico II", "Derecho Tributario"] },
  "\u00c1rea Especializada de Derechos Humanos": { requisitos: ["Historia del Derecho II", "Derecho Internacional Público", "Derecho Procesal I"], abre: ["\u00c1rea especializada de Derecho Internacional"] },
  "Ingles IV": { requisitos: ["Ingles III"], abre: ["Ingles V"] },
  // Continúa completando con el resto de los ramos del Tercer, Cuarto y Quinto Año según el esquema...
};

const semestres = {
  "I Semestre": [
    "Introducción al Derecho I",
    "Historia del Derecho I",
    "Introducción a la Economía",
    "Filosofía moral",
    "Electivo Abierto",
    "Libre/Cfg",
    "Ingles I"
  ],
  "II Semestre": [
    "Introducción al Derecho II",
    "\u00c1rea Especializada de Derecho Económico I",
    "Historia del Derecho II",
    "Derecho Civil I",
    "Derecho Constitucional I",
    "Libre/Cfg",
    "Ingles II"
  ],
  "III Semestre": [
    "Derecho Procesal I",
    "Derecho Constitucional II",
    "Derecho Civil II",
    "Derecho Internacional Público",
    "Electivo Abierto",
    "Libre/Cfg",
    "Ingles III"
  ],
  "IV Semestre": [
    "Derecho Procesal II",
    "Derecho Civil III",
    "Derecho Penal I",
    "Derecho Constitucional III",
    "Regulación de Mercados",
    "\u00c1rea Especializada de Derechos Humanos",
    "Ingles IV"
  ]
  // Agrega más semestres aquí si lo deseas
};

const mallaContainer = document.getElementById("malla");

function crearSemestre(nombre, listaRamos) {
  const contenedor = document.createElement("div");
  contenedor.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = nombre;
  contenedor.appendChild(titulo);

  listaRamos.forEach(nombreRamo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.dataset.nombre = nombreRamo;

    const label = document.createElement("label");
    label.textContent = nombreRamo;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.disabled = (ramos[nombreRamo]?.requisitos.length > 0);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) desbloquearRamos(nombreRamo);
    });

    div.appendChild(label);
    div.appendChild(checkbox);
    contenedor.appendChild(div);
  });

  mallaContainer.appendChild(contenedor);
}

function desbloquearRamos(ramoAprobado) {
  const abreLista = ramos[ramoAprobado]?.abre || [];

  abreLista.forEach(ramo => {
    const requisitos = ramos[ramo].requisitos;
    const aprobados = requisitos.every(
      req => document.querySelector(`[data-nombre="${req}"] input`)?.checked
    );
    if (aprobados) {
      const div = document.querySelector(`[data-nombre="${ramo}"]`);
      if (div) {
        div.classList.remove("bloqueado");
        div.querySelector("input").disabled = false;
      }
    }
  });
}

// Crear los semestres
for (const [semestre, ramos] of Object.entries(semestres)) {
  crearSemestre(semestre, ramos);
}
  </script>
</body>
</html>
