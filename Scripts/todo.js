let tareas = JSON.parse(localStorage.getItem('misTareas')) || [];
let editandoId = null;

document.addEventListener('DOMContentLoaded', () => {
    renderizarTareas();
});

function agregarTarea() {
    const texto = document.getElementById('tareaInput').value;
    const prioridad = document.getElementById('prioridadInput').value;

    if (texto.trim() === "") return alert("Escribe una tarea");

    if (editandoId !== null) {
        // Editar
        tareas = tareas.map(t => t.id === editandoId ? { ...t, texto, prioridad: parseInt(prioridad) } : t);
        editandoId = null;
        document.getElementById('btnGuardarTarea').innerText = "Guardar Tarea";
    } else {
        // Agregar
        const nuevaTarea = {
            id: Date.now(),
            texto: texto,
            prioridad: parseInt(prioridad)
        };
        tareas.push(nuevaTarea);
    }

    limpiarFormulario();
    guardarYRenderizar();
}

function eliminarTarea(id) {
    if (confirm("¿Deseas Eliminar esta tarea?")) {
        tareas = tareas.filter(t => t.id !== id);
        guardarYRenderizar();
    }
}

function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    document.getElementById('tareaInput').value = tarea.texto;
    document.getElementById('prioridadInput').value = tarea.prioridad;
    editandoId = id;
    document.getElementById('btnGuardarTarea').innerText = "Actualizar Tarea";
}

function guardarYRenderizar() {
    // Ordenar por prioridad Alto, Medio y Bajo
    tareas.sort((a, b) => a.prioridad - b.prioridad);
    localStorage.setItem('misTareas', JSON.stringify(tareas));
    renderizarTareas();
}

function renderizarTareas() {
    const container = document.getElementById('listaTareas');
    container.innerHTML = "";

    tareas.forEach(t => {
        const badgeClass = t.prioridad === 1 ? 'bg-danger' : (t.prioridad === 2 ? 'bg-warning text-dark' : 'bg-info text-dark');
        const prioridadTexto = t.prioridad === 1 ? 'Alta' : (t.prioridad === 2 ? 'Media' : 'Baja');

        container.innerHTML += `
            <tr>
                <td><span class="badge ${badgeClass}">${prioridadTexto}</span></td>
                <td class="text-white">${t.texto}</td>
                <td class="text-center">
                    <button onclick="editarTarea(${t.id})" class="btn btn-sm btn-outline-warning me-2">Editar</button>
                    <button onclick="eliminarTarea(${t.id})" class="btn btn-sm btn-outline-danger">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function limpiarFormulario() {
    document.getElementById('tareaInput').value = "";
    document.getElementById('prioridadInput').value = "1";
}