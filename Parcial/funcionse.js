
function obtenerDatos() {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const apellido = document.getElementById("apellido").value;
    const numeroContacto = document.getElementById("numero_contacto").value;
    const numero = document.getElementById("numero").value;
    const perfil = document.getElementById("perfil").value;
    const tipoDocumento = document.getElementById("seleccione").value;


    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("numeroContacto", numeroContacto);
    localStorage.setItem("numero", numero);
    localStorage.setItem("perfil", perfil);
    localStorage.setItem("tipoDocumento", tipoDocumento);

    window.location.href = "segundo.html";
}

function mostrarDatos() {

    const nombre = localStorage.getItem("nombre");
    const email = localStorage.getItem("email");
    const apellido = localStorage.getItem("apellido");
    const numeroContacto = localStorage.getItem("numeroContacto");
    const numero = localStorage.getItem("numero");
    const perfil = localStorage.getItem("perfil");
    const tipoDocumento = localStorage.getItem("tipoDocumento");

    document.getElementById("mostrar-nombre").innerText = nombre;
    document.getElementById("mostrar-email").innerText = email;
    document.getElementById("mostrar-apellido").innerText = apellido;
    document.getElementById("mostrar-numero-contacto").innerText = numeroContacto;
    document.getElementById("mostrar-numero").innerText = numero;
    document.getElementById("mostrar-perfil").innerText = perfil;
    document.getElementById("mostrar-tipo-documento").innerText = tipoDocumento;
}