//existen funciones como querySelector que permite acceder a elementos del html desde el el documento JavaScript

const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues); //el metodo addEventListener permite manejar los eventos desde el JS meramente. Primero se pasa el tipo de evento que se quiere escuchar y segundo el codigo JS que se quiere ejecutar cuando sucede el evento.

//esta funcion se ejecuta cada vez que se realiza submit al formulario en html. Como es el addEventListener quien la ejecuta, el le pasa como argumento el evento mismo, por eso se usa event como parametro para capturar ese argumento y usarlo a favor.
function sumarInputValues(event) {
    event.preventDefault();

    console.log("Hola a todos, me oprimieron");
    console.log(input1.value + input2.value);
    console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
