function saludar() {
  // Obtener el valor del input
  let nombre = document.getElementById("nombre").value.trim();
  let resultado = document.getElementById("resultado");

  // Validar si el usuario escribió algo
  if (nombre === "") {
    resultado.innerText = "Por favor, ingresa tu nombre.";
  } else {
    resultado.innerText = "Hola " + nombre + ", bienvenido al sistema.";
  }
}
