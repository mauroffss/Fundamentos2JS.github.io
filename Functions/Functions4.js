const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];  //Declara y define un array con nombres

const para = document.createElement('p');  //Crea un elemento de párrafo y lo almacena en la variable para

const shortNames = names.filter(name => name.length < 5);  //Filtra los nombres del array que tienen menos de 5 caracteres y los almacena en la variable shortNames
para.textContent = shortNames;  //Establece el contenido de texto del elemento para con los nombres filtrados

    // Don't edit the code below here!

const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section

section.appendChild(para);  //Agrega el elemento para como un hijo de section
