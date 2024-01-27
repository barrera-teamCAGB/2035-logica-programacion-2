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
