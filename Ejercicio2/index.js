// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divConP = document.createElement('div');
const parrafoDentro = document.createElement('p');
divConP.appendChild(parrafoDentro);
document.body.appendChild(divConP);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const divConSeisP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const parrafo = document.createElement('p');
    divConSeisP.appendChild(parrafo);
}
document.body.appendChild(divConSeisP);
// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const parrafoDinamico = document.createElement('p');
parrafoDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(parrafoDinamico);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';
// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
apps.forEach(app => {
    const item = document.createElement('li');
    item.textContent = app;
    lista.appendChild(item);
});
document.body.appendChild(lista);
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementosEliminar = document.querySelectorAll('.fn-remove-me');
elementosEliminar.forEach(elemento => {
    elemento.remove();
});
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const parrafoMedio = document.createElement('p');
parrafoMedio.textContent = 'Voy en medio!';
const divs = document.querySelectorAll('div');
document.body.insertBefore(parrafoMedio, divs[1]);
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here
const divsInsertar = document.querySelectorAll('.fn-insert-here');
divsInsertar.forEach(div => {
    const parrafoDentro = document.createElement('p');
    parrafoDentro.textContent = 'Voy dentro!';
    div.appendChild(parrafoDentro);
});