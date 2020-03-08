// alert('alerta');

//INPUTS
var preguntaNombre = document.getElementById('preguntaNombre');
var preguntaTelefono = document.getElementById('preguntaTelefono');
var preguntaHamburguesa = document.getElementById('preguntaHamburguesa');
var preguntaDireccion = document.getElementById('preguntaDireccion');

//ETIQUETA
var nombre = document.getElementById('nombre');
var telefono = document.getElementById('telefono');
var hamburguesa = document.getElementById('hamburguesa');
var direccion = document.getElementById('direccion');

//BOTÓN
var boton = document.getElementById('ordenar');

//CARD
var respuesta = document.getElementById('respuesta');

//IMG
var hamCpapas = document.getElementById('hamCpapas');
var hamSpapas = document.getElementById('hamSpapas');


function resultados() {
    var dataNombre = preguntaNombre.value;
    var dataTelefono = preguntaTelefono.value;
    var dataHamburguesa = preguntaHamburguesa.value;
    var dataDireccion = preguntaDireccion.value;

    var dataHamburguesaReal = dataHamburguesa.toLowerCase();

    nombre.innerHTML = dataNombre;
    telefono.innerHTML = dataTelefono;
    direccion.innerHTML = dataDireccion;

    if (dataHamburguesaReal === 'si') {
        // hamburguesa.innerHTML = 'Con papas fritas'
        hamCpapas.classList.remove('none')
        hamSpapas.classList.add('none')
    } else if (dataHamburguesaReal === 'no') {
        // hamburguesa.innerHTML = 'Orden sin papas'
        hamCpapas.classList.add('none')
        hamSpapas.classList.remove('none')
    } else {
        hamburguesa.innerHTML = 'Con papas si / no'
        hamCpapas.classList.add('none')
        hamSpapas.classList.add('none')
    }

    console.log(respuesta.classList);
    respuesta.classList.remove('none');

}


boton.addEventListener('click',resultados)