// Clase 2: Funciones

// Actividad 1: Proyecto del aula anterior
// descargamos los archivos del repositorio https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula2

// Actividad 2: Asigna texto a un elemento html
// Cuando vemos que el código se repite mas de una vez podemos simplificar ese código con una función y usar parámetros asi simplificaremos este y podremos volver a utilizarlo mas adelante, como el caso de la funcion asignarTextoElemento(), cada que queramos agregar un text a un elemnto bastra con llamar a esa funcion y colocarle los 2 parametros que nos pide

// Actividad 3: Trabajando con DOM
// un ejercio deonde cambiemos el texto del h2 del archivo html cada que se preciona un boton, la respuesta es la opcion C, recordar que el document.querySelector nos indica que elemnto del DOM queremos utilizar, para estos es necesario conoce la mayoria de las etiquetas de html como los hedear, parrafos, botones, listas, etc

// Actividad 4: Genera un numero aleatorio
// todas las funciones por buena practica deben contener al final el return; regresen o no un valores, podemos utilizar variables de bloque que solo funcionaran dentro de la funcion y podemos devolver con return esa o esas variables por ejemplo return variable1; o variables globales de largo alcance, hay que tener cuidado con ellas para no repetir o crear confuncion, en la funcion asignarTextoElemento no regresa ningun valor y en la funcion generarNumeroSecreto regresara un valor

// Actividad 5: Anatomia de una funcion
// Palabra clave function: Se utiliza para declarar una función en JavaScript.
// Las funciones en JavaScript pueden tener un nombre. De hecho, es una práctica común dar un nombre descriptivo a las funciones para facilitar la lectura y comprensión del código. Estos nombres se utilizan para llamar a la función posteriormente o hacer referencia a ella dentro del propio código, lo que te permite reutilizar la función en diferentes partes del programa.
// Los paréntesis en una función en JavaScript se utilizan para contener los argumentos que recibe la función, lo que permite pasar información a la función e influir en su comportamiento y resultados.
// La palabra clave "return" no es obligatoria en JavaScript, pero se utiliza con frecuencia para especificar un valor que la función debe devolver.
// El cuerpo de una función en JavaScript está delimitado por llaves {}

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);



