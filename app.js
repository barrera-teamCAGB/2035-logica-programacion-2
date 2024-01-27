///////////// Actividad 3: Proyecto Inicial /////////////
// conocer el DOM, es la forma de como nombra los elementos html para asi poder llamarlos en el archivo de javascript y poder interactuar entre ellos
// al llmar un elemnto de html este debera ser guardado en una variable para poder asi interactual con el posteriormente de diferntes maneras, de lo contrario se podra escribir todo en una sola linea pero puede llegar a ser mas complicado entenderlo y cada cambio sera necesario volver a escribir todo, es mas facil guardarlo en una variable y asi poder interactual con el varias veces con ella 

// aqui un ejemplo de una sola linea
// document.querySelector("h1").innerHTML = "Juego del Numero Secreto";
// aqui guardandolo en una variable
let titulo = document.querySelector('h1');
// aqui interactuando con la variable
titulo.innerHTML = "Juego del Numero Secreto";
// si se llegara a ocupar nuevamente, solo se usara la variable de lo contrario se escibiria todo nuevamente en una linea
let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un numero del 1 al 10"
///////////// fin de la actividad 3 /////////////


///////////// Actividad 4: Manipulando contenido html con javascript /////////////
// en el ejercicio propuesto la respuesta correcta fue D
// al método document.querySelector() debe recibir una cadena como argumento y debe estar entre comillas para que este correcto
// innerHTML debe tener un valor asignado debe estar entre comillas (simples o dobles) para que se trate como una cadena de texto. Sin las comillas, JavaScript intentará interpretar el texto como una variable, lo que provocará un error si la variable no está definida.
///////////// fin de la actividad 4 /////////////


///////////// Actividad 5: Evento a un click y primera funcion /////////////
// cualquier interacion desde la interfaz web o frontend, hace una acion como la de desplazar el mouse, colocar el puntero en algun lugar, seleccionar, un click, 2 click, etc, tambien llamdo evento https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events ver tambien https://developer.mozilla.org/es/docs/Web/Events

// la creacion de funciones sigue el mismo concepto de variable, nada de caracteres especiales, que no inicie con numer, no tenga espacios, y usar camelCase, estas funciones se colocan en el archivo html donde estara el evento y termina entre parentesis y dentro del parentesis puedn ir calos o parametros y esta funcion a su vez puede o no regresar un valos
// miFuncion(); esto va en el evento por ejemplo onclick="miFuncion();" este evento le pertenece ala etiqueta button, puede ser cualquier otra mas que lo acepte como la de una caja de texto la pagina completa etc
// ejemplo en nuestro codigo
// en el html en el primer boton colocaremos el evento onclick y dentro nuestra funcio donde aqui la crearemos
// existen varias formas de llamar a la funcion aqui la tradicional donde se declara
function intentoUsuario() {
    alert ("click desde el boton");
}
///////////// fin de la actividad 5 /////////////


///////////// Actividad 6: Funcion onclick /////////////
// en esta actividad la opcion correcta es B, mas in encambio cabe mencionar que en html se puede escribir codigo javascript directo en los eventos, ejemplo
//<button onclick="alert('se dio click al boton');" class="container__boton">Intenta</button>
// Aunque esta es una alternativa válida, generalmente es preferible crear funciones separadas para mantener el código más limpio y organizado.
///////////// fin de la actividad 6 /////////////


///////////// Actividad 7: Para saber mas: diferencia entre html, css y javascript /////////////
// articulo https://www.aluracursos.com/blog/html-css-javascript-cuales-son-las-diferencias
///////////// fin de la actividad 7 /////////////
