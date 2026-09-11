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
    estudiantes.push(estudiante);
    console.log("Formulario enviado");
});

function mostrarEstudiantes(lista = estudiantes) {

    const tabla = document.querySelector("#tablaEstudiantes");

    tabla.innerHTML = "";

    lista.forEach(estudiante => {

        tabla.innerHTML += `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.correo}</td>
                <td>${estudiante.programa}</td>
                <td>Acciones</td>
            </tr>
        `;
    });
}



