let i = 500;  //Declara e inicializa una variable i con el valor 500
const para = document.createElement('p');  //Crea un elemento de párrafo y lo almacena en la variable para

function isPrime(num) {  //Declara una función llamada isPrime que verifica si un número es primo
    for (let j = 2; j < num; j++) {  //Itera desde 2 hasta num - 1
        if (num % j === 0) {  //Verifica si num es divisible por j
            return false;  //Retorna false si num no es primo
        }
    }
    return true;  //Retorna true si num es primo
}

// Add your code here
while (i >= 2) {  //Mientras i sea mayor o igual a 2
    let result = isPrime(i);  //Verifica si el número actual (i) es primo
    if (result === true) {  //Si el resultado indica que el número es primo
        para.textContent += `${i} |`;  //Agrega el número primo al contenido de texto del elemento para
    }
    i--;  //Decrementa i para evaluar el siguiente número
}

// Don't edit the code below here!
const section = document.querySelector('section');  //Selecciona el primer elemento <section> del documento HTML y lo almacena en la variable section
section.appendChild(para);  //Agrega el elemento para como un hijo de section
