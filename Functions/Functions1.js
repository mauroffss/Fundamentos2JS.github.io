const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];  //Declara y define un array de nombres y lo almacena en la variable names
const para = document.createElement('p');  //Crea un nuevo elemento de párrafo y lo almacena en la variable para

// Add your code here
function chooseName() {  //Declara una función llamada chooseName
    let randomNumber = Math.floor(Math.random() * 8);  //Genera un número aleatorio entre 0 y 7 y lo almacena en la variable randomNumber
    para.textContent = `${names[randomNumber]}`;  //Establece el texto del elemento para con un nombre aleatorio obtenido del array names
}

chooseName();  //Llama a la función chooseName para mostrar un nombre aleatorio en el párrafo

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section

section.appendChild(para);  //Agrega el elemento para como hijo de section, colocándolo al final de section
