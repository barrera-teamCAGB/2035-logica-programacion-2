// Clase 2: Funciones

// Actividad 1: Proyecto del aula anterior
// descargamos los archivos del repositorio https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula2

// Actividad 2: Asigna texto a un elemento html
// Cuando vemos que el código se repite mas de una vez podemos simplificar ese código con una función y usar parámetros asi simplificaremos este y podremos volver a utilizarlo mas adelante, como el caso de la funcion asignarTextoElemento(), cada que queramos agregar un text a un elemnto bastra con llamar a esa funcion y colocarle los 2 parametros que nos pide


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



