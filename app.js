// Clase 3: Reiniciando el juego

// Actividad 1: Proyecto del aula anterior
// descargamos los archivos del repositorio https://github.com/alura-es-cursos/2035-logica-programacion-2/tree/Aula3

// Actividad 2: Mensaje, si acertó
// dentro de una funcion podemos llamar a otra funcion este es el caso de verificarIntento() adentro llamamos a asignarTextoElemento (), y en el caso de esta ultima funcion la reutilizaremos para cambiar el texto y colocar mensajes asi ya no sera necesario crear mas codigo, tambien veremos la condicion if cuando valida el numero del usuario con el secreto, aqui ya se usara el triple = dado que ya estamos usando numero con numero y no como antes de un string con un numero

// Actividad 3: Mensaje de numero intentos
// recordamos el uso abreviado de inrementar una variable con doble ++ esto lo acemos en la variable intentos++ cada que el usuario no acierta si incrementara de uno en uno
// usamos el templete string que es mas facil para mesclar texto, variables y codigo en una sola linea sin necesidad de concatenar y la simplicacion del if (OPERADOR TERNARIO) donde es cuando solo hay 2 condiciones rapidas, esto para no crear mas codigo y hacer mas condiciones con codigo estas dos cosas la vemos en cuando el usuario acerta en el numero aqui la linea asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

// Actividad 4: Calculadora de promedio y situación del alumno
// Ejercicio, calcular el promedio de 4 notas y de ser mayor o igual a 5 aprobo, crear 2 funciones una para calcular y la otra para evaluar, aqui la solucion 
/*
let nota1 = 7;
let nota2 = 7;
let nota3 = 7;
let nota4 = 7;

function promedio(nota1, nota2, nota3, nota4) {
  return (nota1+nota2+nota3+nota4)/4;
}

function verificarAprobacion(resultadoPromedio) {
  return (resultadoPromedio >= 5) ? "aprovaste" : "Repovaste";
}

let resultadoPromedio = promedio(nota1,nota2,nota3,nota4);
console.log(resultadoPromedio);
let res = verificarAprobacion(resultadoPromedio);
console.log(res);
 */

// Actividad 5: Limpiar campo
// al llamar a un elemnto de html recordar que se puede hacer con id ya sea por document.getElementById y entre parentesis y comillas dobles o simple el id de ese elemnto pero tambien lo podemos hacer con document.querySelector y entre comillas seguido el numeral o signo de gato el id del elemnto y despues en los dos casos .value
// aqui el segundo caso con una de las lineas del codigo
// document.querySelector('#valorUsuario').value = '';
// esa linea tambien la podemos colocar en una variable y quitarle el .value y porteriormente esa variable usarla y ponerle el .value y asiganrle el valor qe queramos, aqui el ejemplo
// let valorInput = document.querySelector('#valorUsuario');
// valorInput.value = '';
// para mejor el codigo aqui crearemos una funcion para que el foco este en esa caja de texto
// ahora cambiaremos el atributo de un elemento, sera la etiqueta del boton desactivado que esta en html para eso usaremos el dom nuevamente puede ser por getElementById o por querySelector, recordar la sintaxis el primero no lleva # y el segundo si, despues la opcion de remover un atributo la cual es .removeAttribute donde nos pedira cual atributo queremos remover este al ser texto lo pondremos entre comillas y quedaria asi
// document.getElementById('reiniciar').removeAttribute('disabled');

// Actividad 6: Función reiniciar juego
// aqui veremos lo mencionado en alguna ocacion que es una funcion llama a una o mas funciones esta funcion debe estar fuera de de alguna de las funciones que llamaremos si no puede probocar ciclos infinitos aqui, con el codigo de abajo tenemos ya funciones creadas las cuales con la nueva funcion de reiniciar juego ahi vemos como se realiza esto
// asi como existe la opcion de quitar un atributo esta el de agregar uno, para esto se ocupa el dom con la opcion setAttribute la cual requiere de 2 parametros, el atributo y su valor estos seran en cadena de texto por lo cual van entre comillas y tambien puede ser llamado el elemento por medio de si di con selector o elementID aqui el ejempo en nuestro codigo     document.querySelector('#reiniciar').setAttribute('disabled','true');

// Actividad 7: Adapta función
// ejercicio; mejor la siguiente funcion
/* function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);
   */


  // aqui la mejora opcion b es la correcta
/*   function calcularDoble(numero) {
    return numero * 2;
  }
  
  function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
   
  Esta opción es correcta porque divide la funcionalidad en dos funciones separadas, calcularDoble y calcularTriple, lo que mejora la modularidad y facilita la comprensión del código. Además, utiliza variables explícitas (doble y triple) para almacenar los resultados, lo que hace que el código sea más legible. */


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