// Variables globales
let rolActual = 'admin';

// Función para cambiar entre Admin y Cliente
function cambiarRol(rol) {
    rolActual = rol;
    
    // Actualizar items activos en sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Ocultar/mostrar menús
    const adminMenu = document.getElementById('admin-menu');
    const clienteMenu = document.getElementById('cliente-menu');
    
    if (rol === 'admin') {
        adminMenu.style.display = 'block';
        clienteMenu.style.display = 'none';
        mostrarSeccion('admin-inicio');
        
        // Marcar como activo
        document.querySelector('[onclick="cambiarRol(\'admin\')"]').classList.add('active');
    } else {
        adminMenu.style.display = 'none';
        clienteMenu.style.display = 'block';
        mostrarSeccion('cliente-inicio');
        
        // Marcar como activo
        document.querySelector('[onclick="cambiarRol(\'cliente\')"]').classList.add('active');
    }
}

// Función para mostrar secciones
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.classList.add('active');
    }
    
    // Actualizar items activos en sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Marcar como activo el item correspondiente
    const itemActivo = document.querySelector(`[onclick="mostrarSeccion('${seccionId}')"]`);
    if (itemActivo) {
        itemActivo.classList.add('active');
    }
    
    // Scroll al top
    document.querySelector('.main').scrollTop = 0;
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar sección inicial
    mostrarSeccion('admin-inicio');
    
    // Marcar admin como activo
    document.querySelector('[onclick="cambiarRol(\'admin\')"]').classList.add('active');
    document.querySelector('[onclick="mostrarSeccion(\'admin-inicio\')"]').classList.add('active');
});
