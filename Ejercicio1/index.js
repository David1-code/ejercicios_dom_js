// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const boton = document.querySelector('.showme');
console.log(boton);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo = document.querySelector('#pillado');
console.log(titulo);
// 1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
    console.log(parrafo);
});
// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon
const pokemons = document.querySelectorAll('.pokemon');
pokemons.forEach(pokemon => {
    console.log(pokemon);
});
// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const personajes = document.querySelectorAll('[data-function="testMe"]');
personajes.forEach(personaje => {
    console.log(personaje);
});
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje)