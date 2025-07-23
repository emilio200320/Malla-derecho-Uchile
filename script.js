// script.js

const ramos = {
  // PRIMER AÑO
  "Introducción al Derecho I": { requisitos: [], abre: ["Derecho Civil I", "Derecho Constitucional I", "Introducción al Derecho II"] },
  "Historia del Derecho I": { requisitos: [], abre: ["Historia del Derecho II"] },
  "Introducción a la Economía": { requisitos: [], abre: ["Área Especializada de Derecho Económico I"] },
  "Filosofía moral": { requisitos: [], abre: ["Área Especializada de Ciencias del Derecho"] },
  "Electivo Abierto": { requisitos: [], abre: [] },
  "Libre/Cfg": { requisitos: [], abre: [] },
  "Ingles I": { requisitos: [], abre: ["Ingles II"] },
  "Introducción al Derecho II": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Procesal I", "Derecho Constitucional II", "Derecho Civil II", "Derecho Internacional Público", "Área Especializada de Ciencias del Derecho"] },
  "Área Especializada de Derecho Económico I": { requisitos: ["Introducción a la Economía"], abre: ["Regulación de Mercados"] },
  "Historia del Derecho II": { requisitos: ["Historia del Derecho I"], abre: ["Área Especializada de Ciencias del Derecho", "Área especializada de Derechos Humanos"] },
  "Derecho Civil I": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Civil II"] },
  "Derecho Constitucional I": { requisitos: ["Introducción al Derecho I"], abre: ["Derecho Procesal I", "Derecho Constitucional II", "Derecho Internacional Público", "Regulación de Mercados"] },
  "Ingles II": { requisitos: ["Ingles I"], abre: ["Ingles III"] },

  // SEGUNDO AÑO
  "Derecho Procesal I": { requisitos: ["Introducción al Derecho II", "Derecho Constitucional I"], abre: ["Derecho Procesal II", "Derecho Constitucional III", "Área especializada de Derechos Humanos"] },
  "Derecho Constitucional II": { requisitos: ["Introducción al Derecho II", "Derecho Constitucional I"], abre: ["Penal I", "Derecho Constitucional III", "Área Especializada de Derechos Humanos"] },
  "Derecho Civil II": { requisitos: ["Derecho Civil I", "Introducción al Derecho II"], abre: ["Derecho Civil III", "Regulación de Mercados", "Área especializada de Derecho Internacional"] },
  "Derecho Internacional Público": { requisitos: ["Derecho Constitucional I", "Introducción al Derecho II"], abre: ["Área Especializada de Derechos Humanos", "Derecho Internacional Privado", "Área especializada de Derecho Internacional"] },
  "Electivo Abierto": { requisitos: [], abre: [] },
  "Ingles III": { requisitos: ["Ingles II"], abre: ["Ingles IV"] },

  "Derecho Procesal II": { requisitos: ["Derecho Procesal I"], abre: ["Derecho Procesal III"] },
  "Derecho Civil III": { requisitos: ["Derecho Civil II"], abre: ["Derecho Civil IV", "Derecho del trabajo I"] },
  "Derecho Penal I": { requisitos: ["Derecho Constitucional II"], abre: ["Penal II"] },
  "Derecho Constitucional III": { requisitos: ["Derecho Constitucional II", "Derecho Procesal I"], abre: ["Derecho Administrativo I", "Derecho del Trabajo I", "Área especializada de Derecho Internacional"] },
  "Regulación de Mercados": { requisitos: ["Derecho Constitucional I", "Derecho Civil II", "Área Especializada de Derecho Económico I"], abre: ["Derecho Ambiental", "Área especializada de Derecho Económico II", "Derecho Tributario"] },
  "Área Especializada de Derechos Humanos": { requisitos: ["Historia del Derecho II", "Derecho Internacional Público", "Derecho Procesal I"], abre: ["Área especializada de Derecho Internacional"] },
  "Ingles IV": { requisitos: ["Ingles III"], abre: ["Ingles V"] },

  // TERCER AÑO
  "Derecho Procesal III": { requisitos: ["Derecho Procesal II"], abre: ["Derecho Procesal IV"] },
  "Derecho Civil IV": { requisitos: ["Derecho Civil III"], abre: ["Derecho Civil V", "Derecho Civil VII"] },
  "Derecho Penal II": { requisitos: ["Derecho Penal I"], abre: ["Derecho Penal III"] },
  "Derecho Administrativo I": { requisitos: ["Derecho Constitucional III"], abre: ["Derecho Administrativo II", "Derecho Ambiental"] },
  "Derecho del Trabajo I": { requisitos: ["Derecho Civil III", "Derecho Constitucional III"], abre: ["Derecho del Trabajo II"] },
  "Área Especializada Derecho Internacional": { requisitos: ["Derecho Internacional Público", "Derecho Civil II", "Derecho Constitucional III", "Área Especializada de Derechos Humanos"], abre: [] },
  "Ingles V": { requisitos: ["Ingles IV"], abre: [] },

  "Derecho Procesal IV": { requisitos: ["Derecho Procesal III"], abre: ["Área especializada de Derecho Procesal", "Profesión Jurídica", "Clínicas Jurídicas I"] },
  "Derecho Civil V": { requisitos: ["Derecho Civil IV"], abre: ["Derecho Civil VI", "Derecho Civil VII", "Clínicas Jurídicas I"] },
  "Derecho Penal III": { requisitos: ["Derecho Penal II"], abre: ["Área especializada de Derecho de la ciencias penales"] },
  "Derecho Administrativo II": { requisitos: ["Derecho Administrativo I"], abre: [] },
  "Derecho del Trabajo II": { requisitos: ["Derecho del Trabajo I"], abre: ["Derecho de la Seguridad Social", "Clínicas Jurídicas I"] },
  "Derecho Comercial I": { requisitos: [], abre: ["Derecho Comercial II", "Derecho Civil VII"] },
  "Derecho Ambiental": { requisitos: ["Regulación de Mercados", "Derecho Administrativo I"], abre: ["Área especializada de Derecho Económico II"] },

  // CUARTO AÑO
  "Área Especializada Derecho Procesal": { requisitos: ["Derecho Procesal IV"], abre: [] },
  "Derecho Civil VI": { requisitos: ["Derecho Civil V"], abre: ["Área especializada de Derecho Privado", "Derecho Internacional Privado", "Profesión Jurídica", "Derecho Civil VII"] },
  "Área Especializada Derecho Ciencias Penales": { requisitos: ["Derecho Penal III"], abre: [] },
  "Área Especializada Derecho Económico II": { requisitos: ["Regulación de Mercados", "Derecho Ambiental"], abre: [] },
  "Derecho Comercial II": { requisitos: ["Derecho Comercial I"], abre: ["Derecho Comercial III", "Derecho Tributario"] },
  "Derecho de la Seguridad Social": { requisitos: ["Derecho del Trabajo II"], abre: [] },
  "Área Especializada Ciencias del Derecho": { requisitos: ["Filosofía moral", "Historia del Derecho II", "Introducción al Derecho II"], abre: [] },

  "Taller de Memoria I": { requisitos: [], abre: ["Taller de Memoria II"] },
  "Derecho Civil VII": { requisitos: ["Derecho Civil IV", "Derecho Civil V", "Derecho Civil VI", "Derecho Comercial I"], abre: ["Área especializada de Derecho Privado", "Taller integrado de Resolución de Casos"] },
  "Clínicas Jurídicas I": { requisitos: ["Derecho Procesal IV", "Derecho Civil V", "Derecho del Trabajo II"], abre: ["Clínicas Jurídicas especializadas"] },
  "Profesión Jurídica": { requisitos: ["Derecho Procesal IV", "Derecho Civil VI"], abre: [] },
  "Derecho Comercial III": { requisitos: ["Derecho Comercial II"], abre: ["Taller integrado de Resolución de Casos"] },

  // QUINTO AÑO
  "Taller de Memoria II": { requisitos: ["Taller de Memoria I"], abre: [] },
  "Área Especializada Derecho Privado": { requisitos: ["Derecho Civil VI", "Derecho Civil VII"], abre: [] },
  "Clínicas Jurídicas Especializadas": { requisitos: ["Clínicas Jurídicas I"], abre: [] },
  "Derecho Tributario": { requisitos: ["Derecho Comercial II", "Regulación de Mercados"], abre: [] },
  "Taller Integrado de Resolución de Casos": { requisitos: ["Derecho Civil VII", "Derecho Comercial III"], abre: [] },
  "Derecho Internacional Privado": { requisitos: ["Derecho Internacional Público", "Derecho Civil VI"], abre: [] }
};

const semestres = {
  "I Semestre": ["Introducción al Derecho I", "Historia del Derecho I", "Introducción a la Economía", "Filosofía moral", "Electivo Abierto", "Libre/Cfg", "Ingles I"],
  "II Semestre": ["Introducción al Derecho II", "Área Especializada de Derecho Económico I", "Historia del Derecho II", "Derecho Civil I", "Derecho Constitucional I", "Libre/Cfg", "Ingles II"],
  "III Semestre": ["Derecho Procesal I", "Derecho Constitucional II", "Derecho Civil II", "Derecho Internacional Público", "Electivo Abierto", "Libre/Cfg", "Ingles III"],
  "IV Semestre": ["Derecho Procesal II", "Derecho Civil III", "Derecho Penal I", "Derecho Constitucional III", "Regulación de Mercados", "Área Especializada de Derechos Humanos", "Ingles IV"],
  "V Semestre": ["Derecho Procesal III", "Derecho Civil IV", "Derecho Penal II", "Derecho Administrativo I", "Derecho del Trabajo I", "Área Especializada Derecho Internacional", "Ingles V"],
  "VI Semestre": ["Derecho Procesal IV", "Derecho Civil V", "Derecho Penal III", "Derecho Administrativo II", "Derecho del Trabajo II", "Derecho Comercial I", "Derecho Ambiental"],
  "VII Semestre": ["Área Especializada Derecho Procesal", "Derecho Civil VI", "Área Especializada Derecho Ciencias Penales", "Área Especializada Derecho Económico II", "Derecho Comercial II", "Derecho de la Seguridad Social", "Área Especializada Ciencias del Derecho"],
  "VIII Semestre": ["Taller de Memoria I", "Derecho Civil VII", "Clínicas Jurídicas I", "Profesión Jurídica", "Derecho Comercial III", "Libre/Cfg"],
  "IX Semestre": ["Taller de Memoria II", "Área Especializada Derecho Privado", "Clínicas Jurídicas Especializadas", "Derecho Tributario", "Electivo Abierto", "Electivo Abierto"],
  "X Semestre": ["Taller Integrado de Resolución de Casos", "Derecho Internacional Privado", "Electivo Abierto", "Electivo Abierto", "Libre/Cfg"]
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

for (const [semestre, ramosLista] of Object.entries(semestres)) {
  crearSemestre(semestre, ramosLista);
}
