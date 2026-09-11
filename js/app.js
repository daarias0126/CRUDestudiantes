const formulario = document.querySelector("#formEstudiante");

let estudiantes = [];

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const programa = document.querySelector("#programa").value;
    const estudiante = {
    nombre,
    correo,
    programa
};
    console.log("Formulario enviado");
});



