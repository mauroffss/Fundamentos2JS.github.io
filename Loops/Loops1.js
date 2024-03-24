const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];  //Declara y define un array con diferentes alimentos

const list = document.createElement('ul');  //Crea un elemento de lista desordenada y lo almacena en la variable list

// Add your code here
for (const food of myArray) {  //Itera sobre cada elemento del array myArray
    const listItem = document.createElement('li');  //Crea un elemento de lista y lo almacena en la variable listItem
    listItem.textContent = food;  //Establece el contenido de texto del elemento listItem con el valor del alimento actual
    list.appendChild(listItem);  //Agrega el elemento listItem como un hijo de list
}

// Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section
section.appendChild(list);  //Agrega la lista como un hijo de section
