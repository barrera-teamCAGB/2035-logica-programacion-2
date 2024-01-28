// Clase 3: Reiniciando el juego

// Actividad 1: Proyecto del aula anterior
// descargamos los archivos del repositorio https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula3

// Actividad 2: Mensaje, si acertó
// dentro de una funcion podemos llamar a otra funcion este es el caso de verificarIntento() adentro llamamos a asignarTextoElemento (), y en el caso de esta ultima funcion la reutilizaremos para cambiar el texto y colocar mensajes asi ya no sera necesario crear mas codigo, tambien veremos la condicion if cuando valida el numero del usuario con el secreto, aqui ya se usara el triple = dado que ya estamos usando numero con numero y no como antes de un string con un numero

// Actividad 3: Mensaje de numero intentos
// recordamos el uso abreviado de inrementar una variable con doble ++ esto lo acemos en la variable intentos++ cada que el usuario no acierta si incrementara de uno en uno
// usamos el templete string que es mas facil para mesclar texto, variables y codigo en una sola linea sin necesidad de concatenar y la simplicacion del if (OPERADOR TERNARIO) donde es cuando solo hay 2 condiciones rapidas, esto para no crear mas codigo y hacer mas condiciones con codigo estas dos cosas la vemos en cuando el usuario acerta en el numero aqui la linea asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();