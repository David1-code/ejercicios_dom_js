// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listaPaises = document.createElement('ul');
countries.forEach(pais => {
    const item = document.createElement('li');
    item.textContent = pais;
    listaPaises.appendChild(item);
});
document.body.appendChild(listaPaises);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoEliminar = document.querySelector('.fn-remove-me');
elementoEliminar.remove();
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement('ul');
cars.forEach(coche => {
    const item = document.createElement('li');
    item.textContent = coche;
    listaCoches.appendChild(item);
});
divPrintHere.appendChild(listaCoches);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriesData = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
countriesData.forEach(country => {
    const div = document.createElement('div');
    const titulo = document.createElement('h4');
    const imagen = document.createElement('img');
    titulo.textContent = country.title;
    imagen.src = country.imgUrl;
    div.appendChild(titulo);
    div.appendChild(imagen);
    document.body.appendChild(div);
});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const botonEliminarUltimo = document.createElement('button');
botonEliminarUltimo.textContent = 'Eliminar último';
botonEliminarUltimo.onclick = () => {
    const divs = document.querySelectorAll('div:not([data-function="printHere"])');
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
};
document.body.appendChild(botonEliminarUltimo);
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
const divs = document.querySelectorAll('div:not([data-function="printHere"])');
divs.forEach(div => {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar este div';
    botonEliminar.onclick = () => {
        div.remove();
    };
    div.appendChild(botonEliminar);
});
