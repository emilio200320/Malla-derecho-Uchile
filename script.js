// Almacena el estado de cada ramo (aprobado o no)
const ramos = {};

// Definir los prerrequisitos
const prerequisitos = {
    "Derecho Civil I": ["Introducción al Derecho I"],
    "Derecho Constitucional I": ["Introducción al Derecho I"],
    "Introducción al Derecho II": ["Introducción al Derecho I"],
    "Historia del Derecho II": ["Historia del Derecho I"],
    "Área Especializada de Derecho Económico I": ["Introducción a la Economía"],
    "Área Especializada de Ciencias del Derecho": ["Filosofía moral", "Introducción al Derecho II", "Historia del Derecho II"],
    "Ingles II": ["Ingles I"],

    "Derecho Procesal I": ["Introducción al Derecho II", "Derecho Constitucional I"],
    "Derecho Constitucional II": ["Introducción al Derecho II", "Derecho Constitucional I"],
    "Derecho Civil II": ["Introducción al Derecho II", "Derecho Civil I"],
    "Derecho Internacional Público": ["Introducción al Derecho II", "Derecho Constitucional I"],
    "Regulación de Mercados": ["Área Especializada de Derecho Económico I", "Derecho Constitucional I"],
    "Ingles III": ["Ingles II"],

    "Derecho Procesal II": ["Derecho Procesal I"],
    "Derecho Constitucional III": ["Derecho Procesal I", "Derecho Constitucional II"],
    "Derecho Civil III": ["Derecho Civil II"],
    "Área especializada de Derecho Internacional": ["Derecho Civil II", "Derecho Internacional Público"],
    "Área Especializada de Derechos Humanos": ["Derecho Internacional Público", "Historia del Derecho II", "Derecho Procesal I", "Derecho Constitucional II"],
    "Penal I": ["Derecho Constitucional II"],
    "Ingles IV": ["Ingles III"],

    "Derecho Procesal III": ["Derecho Procesal II"],
    "Derecho Civil IV": ["Derecho Civil III"],
    "Derecho del Trabajo I": ["Derecho Civil III", "Derecho Constitucional III"],
    "Penal II": ["Derecho Penal I"],
    "Derecho Administrativo I": ["Derecho Constitucional III"],
    "Derecho Ambiental": ["Regulación de Mercados", "Derecho Administrativo I"],
    "Área especializada de Derecho Económico II": ["Regulación de Mercados", "Derecho Ambiental"],
    "Ingles V": ["Ingles IV"],

    "Derecho Procesal IV": ["Derecho Procesal III"],
    "Derecho Civil V": ["Derecho Civil IV"],
    "Derecho Penal III": ["Derecho Penal II"],
    "Derecho Administrativo II": ["Derecho Administrativo I"],
    "Derecho del Trabajo II": ["Derecho del Trabajo I"],
    "Derecho de la Seguridad Social": ["Derecho del Trabajo II"],
    "Derecho Comercial I": ["Derecho Civil III"],
    "Derecho Comercial II": ["Derecho Comercial I"],
    "Derecho Tributario": ["Regulación de Mercados", "Derecho Comercial II"],

    "Área Especializada Derecho Procesal": ["Derecho Procesal IV"],
    "Área Especializada Derecho Ciencias Penales": ["Derecho Penal III"],
    "Área Especializada Derecho Privado": ["Derecho Civil VI", "Derecho Civil VII"],
    "Área Especializada Ciencias del Derecho": ["Filosofía moral", "Introducción al Derecho II", "Historia del Derecho II"],
    "Derecho Civil VI": ["Derecho Civil V"],
    "Derecho Civil VII": ["Derecho Civil V", "Derecho Civil IV", "Derecho Comercial I", "Derecho Civil VI"],
    "Derecho Internacional Privado": ["Derecho Internacional Público", "Derecho Civil VI"],
    "Profesión Jurídica": ["Derecho Procesal IV", "Derecho Civil VI"],
    "Clínicas Jurídicas I": ["Derecho Procesal IV", "Derecho Civil V", "Derecho del Trabajo II"],
    "Clínicas Jurídicas Especializadas": ["Clínicas Jurídicas I"],
    "Taller de Memoria I": [],
    "Taller de Memoria II": ["Taller de Memoria I"],
    "Taller Integrado de Resolución de Casos": ["Derecho Civil VII", "Derecho Comercial III"],
    "Derecho Comercial III": ["Derecho Comercial II"],
};

// Inicializa los botones y cajas
document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".ramo");

    botones.forEach(btn => {
        const nombre = btn.dataset.nombre;
        ramos[nombre] = false;

        btn.addEventListener("click", () => {
            ramos[nombre] = true;
            btn.classList.add("aprobado");
            btn.disabled = true;
            desbloquearRamos();
        });
    });

    desbloquearRamos();
});

function desbloquearRamos() {
    const botones = document.querySelectorAll(".ramo");

    botones.forEach(btn => {
        const nombre = btn.dataset.nombre;

        if (ramos[nombre]) return; // ya aprobado

        const prereqs = prerequisitos[nombre] || [];

        const habilitado = prereqs.every(pr => ramos[pr]);

        if (habilitado) {
            btn.disabled = false;
            btn.classList.remove("bloqueado");
        } else {
            btn.disabled = true;
            btn.classList.add("bloqueado");
        }
    });
}
