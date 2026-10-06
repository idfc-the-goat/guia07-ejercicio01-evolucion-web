// Devuelve un saludo según la hora del día
function obtenerSaludo() {
  const hora = new Date().getHours();
  if (hora < 12) return "Buenos días";
  if (hora < 19) return "Buenas tardes";
  return "Buenas noches";
}

// Muestra un mensaje en verde (válido) o rojo (error)
function mostrarMensaje(id, texto, esValido) {
  const elemento = document.getElementById(id);
  elemento.innerText = texto;
  elemento.className = esValido ? "mensaje ok" : "mensaje error";
}

// Devuelve "" si el nombre es válido o el mensaje de error
function validarNombre(nombre) {
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+$/;
  if (nombre === "") return "Por favor, ingresa tu nombre.";
  if (nombre.length < 3) return "El nombre debe tener al menos 3 caracteres.";
  if (!soloLetras.test(nombre))
    return "El nombre solo puede contener letras y espacios.";
  return "";
}

function saludar() {
  const nombre = document.getElementById("nombre").value.trim();
  const error = validarNombre(nombre);

  if (error !== "") {
    mostrarMensaje("resultado", error, false);
    return;
  }
  mostrarMensaje(
    "resultado",
    obtenerSaludo() + " " + nombre + ", bienvenido al sistema.",
    true,
  );
}

function validarCorreo() {
  const correo = document.getElementById("correo").value.trim();
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    mostrarMensaje("mensajeCorreo", "Debe ingresar un correo.", false);
  } else if (!formatoCorreo.test(correo)) {
    mostrarMensaje(
      "mensajeCorreo",
      "El formato del correo no es válido (ej. nombre@dominio.com).",
      false,
    );
  } else {
    mostrarMensaje("mensajeCorreo", "Correo registrado correctamente.", true);
  }
}

// Contador de caracteres en tiempo real
function actualizarContador() {
  const longitud = document.getElementById("nombre").value.length;
  document.getElementById("contador").innerText = longitud + " / 30";
}
