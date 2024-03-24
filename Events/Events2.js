const canvas = document.querySelector('canvas');  //Selecciona el elemento canvas del documento HTML y lo almacena en la variable canvas
const ctx = canvas.getContext('2d');  //Obtiene el contexto de dibujo en 2D del elemento canvas y lo almacena en la variable ctx

function drawCircle(x, y, size) {  //Define la función drawCircle con parámetros x, y, y size
    ctx.fillStyle = 'white';  //Establece el color de relleno del contexto a blanco
    ctx.fillRect(0, 0, canvas.width, canvas.height);  //Dibuja un rectángulo blanco que cubre todo el canvas
    ctx.beginPath();  //Comienza un nuevo trazado de dibujo
    ctx.fillStyle = 'black';  //Establece el color de relleno del contexto a negro
    ctx.arc(x, y, size, 0, 2 * Math.PI);  //Dibuja un círculo en las coordenadas (x, y) con el tamaño especificado
    ctx.fill();  //Rellena el círculo con el color especificado
}

let x = 50;  //Inicializa la coordenada x del círculo
let y = 50;  //Inicializa la coordenada y del círculo
const size = 30;  //Inicializa el tamaño del círculo

drawCircle(x, y, size);  //Dibuja un círculo en las coordenadas (x, y) con el tamaño especificado

// Add your code here
document.addEventListener('keydown', (event) => {  //Agrega un event listener para detectar cuando se presiona una tecla
    const Tecla = event.key.toUpperCase();  //Obtiene la tecla presionada y la convierte a mayúsculas
    
    switch (Tecla) {  //Inicia un bloque switch para realizar diferentes acciones según la tecla presionada
        case 'W':  //En caso de que se presione la tecla 'W'
            y -= 10;  //Disminuye la coordenada y en 10 unidades
            break;
        case 'A':  //En caso de que se presione la tecla 'A'
            x -= 10;  //Disminuye la coordenada x en 10 unidades
            break;
        case 'S':  //En caso de que se presione la tecla 'S'
            y += 10;  //Aumenta la coordenada y en 10 unidades
            break;
        case 'D':  //En caso de que se presione la tecla 'D'
            x += 10;  //Aumenta la coordenada x en 10 unidades
            break;
    }
    
    drawCircle(x, y, size);  //Dibuja un círculo en las nuevas coordenadas (x, y)
});
