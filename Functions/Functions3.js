const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];  //Declara y define un array con nombres

const para = document.createElement('p');  //Crea un elemento de párrafo y lo almacena en la variable para

    // Add your code here
function random(a, b) {  //Declara una función llamada random que genera un número aleatorio entre dos límites dados
    return Math.floor(Math.random() * (b - a + 1)) + a;  //Retorna un número entero aleatorio dentro del rango especificado
}

function chooseName(list) {  //Declara una función llamada chooseName que elige un nombre aleatorio del array dado
    let randomNumber = random(0, list.length - 1);  //Genera un número aleatorio dentro del rango de índices del array
    return list[randomNumber];  //Retorna el nombre aleatorio seleccionado del array
}

para.textContent = `${chooseName(names)}`;  //Establece el contenido de texto del elemento para con un nombre aleatorio del array

    // Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section

section.appendChild(para);  //Agrega el elemento para como un hijo de section
