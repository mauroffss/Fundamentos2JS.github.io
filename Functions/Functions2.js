const canvas = document.querySelector('canvas');  //Selecciona el primer elemento <canvas> del documento HTML y lo almacena en la variable canvas
const ctx = canvas.getContext('2d');  //Obtiene el contexto de representación en 2D del lienzo canvas y lo almacena en la variable ctx

const x = 50;  //Declara y define la coordenada x del rectángulo
const y = 60;  //Declara y define la coordenada y del rectángulo
const width = 100;  //Declara y define el ancho del rectángulo
const height = 75;  //Declara y define la altura del rectángulo
const color = 'blue';  //Declara y define el color del rectángulo

    // Add your code here
function Rectangulo(x, y, width, height, color){  //Declara una función llamada Rectangulo con parámetros x, y, width, height y color
    ctx.clearRect(0, 0, canvas.width, canvas.height);  //Limpia el lienzo canvas
    ctx.fillStyle = color;  //Establece el color de relleno del contexto a color
    ctx.fillRect(x, y, width, height);  //Dibuja un rectángulo relleno en las coordenadas x, y con el ancho y la altura especificados
}

Rectangulo(x, y, width, height, color);  //Llama a la función Rectangulo para dibujar un rectángulo en el lienzo con los parámetros dados

    // Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section
