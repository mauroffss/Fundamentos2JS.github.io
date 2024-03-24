const btn = document.querySelector('.off');  // Selecciona el primer elemento con la clase 'off' y lo almacena en la variable "btn"

// Add your code here
btn.addEventListener("click", () => {  // Agrega un event listener de click al elemento "btn"
    if (btn.textContent === "Machine is off") {  // Verifica si el texto del botón es "Machine is off"
        btn.textContent = "New Text";  // Cambia el texto del botón a "New Text" si el texto actual es "Machine is off"
    } else {
        btn.textContent = "Machine is off";  // Cambia el texto del botón a "Machine is off" si el texto actual no es "Machine is off"
    }
});
