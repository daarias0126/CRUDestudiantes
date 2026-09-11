let estudiantes = [];

const formulario = document.querySelector("#formEstudiante");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const programa = document.querySelector("#programa").value;
   const estudiante = {
    id: Date.now(),
    nombre,
    correo,
    programa
};
    estudiantes.push(estudiante);
    mostrarEstudiantes();
formulario.reset();

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
                <td>
    <button onclick="editarEstudiante(${estudiante.id})">Editar</button>
    <button onclick="eliminarEstudiante(${estudiante.id})">Eliminar</button>
</td>
                <td>Acciones</td>
            </tr>
        `;
    });
}

function eliminarEstudiante(id) {

    estudiantes = estudiantes.filter(
        estudiante => estudiante.id !== id
    );

    mostrarEstudiantes();
}

mostrarEstudiantes();

