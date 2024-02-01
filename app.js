// Clase 4: Listas

// Actividad 1: Proyecto del aula anterior
// Copiamos el repositorio de Aula 4

// Actividad 2: Arreglos
// es una variable que se maneja como una lista, la declaracion de un arreglo es let nomVaribale = ["dato1", 1, ...];
// para declarar una vacia basta con poner los corchetes vacios []
// puede tener datos string y numeros combianados, lo ideal es que solo sea de uno, pero aun asi se puede hacer
// para agregar elementos nuevos se pueden hacer al final en medio o al inicio, el mas usado es al final, esto es con el meto push variable.push[3]; estwe se agrega al final
// para saber el tamaño de la lista es variable.length;
// para acceder a un elemento en particular; recordar que se empieza con cero como el primer elemento, por lo cual para el primer elemento seria variable[0];
// para el ultimo elemento es total menos uno variable[variable.legth-1];
// una posicion no valida o negativa marcara como undefined

// Actividad 03: Manipulación de listas en JS
// Creamos la siguiente lista
/*  
creamos nuestra variable
let listaCompras = [];

colocamos valores con push
listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
 
mostramos la cantidad de elemntos de la lista
console.log(listaCompras.length);

Accedemos a lugar numero 4 de la lista que es pan
console.log(listaCompras[3]);
*/

// Actividad 04 Arreglos: Recursividad
// se alamacenaran todos los numeros sorteados en una lista "listaNumerosSorteados" para comparar despues si ya fue sorteaado ya no volverlo a jugar y colocar uno nuevo
// con una nueva funcion que incluye las listas verificamos si una variable o elemento que queremos saber esta incluido en ella para usaremos .include() el cual puede recibir un parametro en este caso sera el numero que se genero como secreto y quedaria dentro de un if para devolvernos un valor booleano
// "if (listaNumerosSorteados.includes(numeroGenerado)) {"
// el .inlcude recorre todo el arreglo para seber si ya existe
// cuando el elemento no esta en la lista lo guardamos con push para irlo agregando a nuestra lista
// listaNumerosSorteados.push(numeroGenerado);
// Recursividad: la funcion que esta ahi se llama a si misma
// return generarNumeroSecreto();
// al usar la recursividad podemos cometer el error de ciclar el programa y cause error fatal para eso hay que tener cuidado con la condicion de salida

// Actividad 05: Resolviendo la Recursividad
// el roblema que hubo es que no existia un numero maximo para llenar nuestra lista y eso proboco que fuera infinito, por lo cual una de las soluciones es colocarle un tope o un maximo a esa lista para que cuando este llena termine y ya no acepte mas para eso aqui el codigo que se uso el cual es dentro de una condicion if
// if (listaNumerosSorteados.length == numeroMaximo) {
// con esto al llegar al maximo tope de nuestra lista ya no podra seguir metiendo mas a ella
// otra solucion es colocar un numero maximo de intentos y cuando llegue a este terminarlo, es otra forma de parar la recursividad, este se realizo en el otro cuerso y se puede implementar aqui queda de tarea

// Actividad 6: Sorteando libros
// esta actividad requide lo siguiente
// El sorteo debe hacerse de manera que todos los libros tengan la oportunidad de ser sorteados al menos una vez, y después de eso, el sorteo debe comenzar de nuevo. 
/* aqui en breve ejemplo de como quedaria
let listaDeLibrosSorteados = [];
let numeroLimite = 10;

function sorteLibro() {
	let libroElegido = parseInt(Math.random() * numeroLimite + 1);
  listaDeLibrosSorteados.push(libroElegido);
	let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;  
	if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
	}
}
sorteLibro();
*/


let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



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
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
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