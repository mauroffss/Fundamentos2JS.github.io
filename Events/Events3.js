const buttonBar = document.querySelector('.button-bar');  //Selecciona el elemento con la clase 'button-bar' del documento HTML y lo almacena en la variable buttonBar

// Add your code here
buttonBar.addEventListener("click", (event) => {  //Agrega un event listener para detectar clicks en el elemento buttonBar
    let color = event.target.dataset.color.toLowerCase();  //Obtiene el valor del atributo 'data-color' del elemento al cual se le hace click y lo convierte a minúsculas
    
    switch (color) {  //Inicia un bloque switch para realizar diferentes acciones según el color obtenido
        case 'red':  //En caso de que el color sea 'red'
            buttonBar.style.backgroundColor = "red";  //Establece el color de fondo de buttonBar a rojo
            break;
        case 'yellow':  //En caso de que el color sea 'yellow'
            buttonBar.style.backgroundColor = "yellow";  //Establece el color de fondo de buttonBar a amarillo
            break;
        case 'green':  //En caso de que el color sea 'green'
            buttonBar.style.backgroundColor = "green";  //Establece el color de fondo de buttonBar a verde
            break;
        case 'purple':  //En caso de que el color sea 'purple'
            buttonBar.style.backgroundColor = "purple";  //Establece el color de fondo de buttonBar a morado
            break;
    }
});
