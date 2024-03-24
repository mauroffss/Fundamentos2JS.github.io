const name = 'Mustafa';  //Declara y define una constante name con el valor 'Mustafa'
const para = document.createElement('p');  //Crea un elemento de párrafo y lo almacena en la variable para

const phonebook = [  //Declara y define una matriz llamada phonebook con objetos que contienen nombres y números de teléfono
    { name: 'Chris', number: '1549' },
    { name: 'Li Kang', number: '9634' },
    { name: 'Anne', number: '9065' },
    { name: 'Francesca', number: '3001' },
    { name: 'Mustafa', number: '6888' },
    { name: 'Tina', number: '4312' },
    { name: 'Bert', number: '7780' },
    { name: 'Jada', number: '2282' },
];

// Add your code here
for (let i = 0; i < phonebook.length; i++) {  //Itera sobre cada elemento del phonebook
    const contacto = phonebook[i];  //Almacena el objeto actual en la variable contacto
    if (contacto.name === name) {  //Verifica si el nombre del contacto actual coincide con el nombre buscado
        para.textContent = `Name: ${name} | Phone number: ${contacto.number}`;  //Establece el contenido de texto del elemento para con la información del contacto encontrado
        break;  //Sale del bucle
    }
}

if (para.textContent === "") {  //Si el contenido de texto del elemento para está vacío
    para.textContent = "Contact does not exist";  //Establece un mensaje de que el contacto no existe
}

// Don't edit the code below here!
const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section
section.appendChild(para);  //Agrega el elemento para como un hijo de section
