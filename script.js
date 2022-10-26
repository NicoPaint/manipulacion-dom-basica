//existen funciones como querySelector que permite acceder a elementos del html desde el el documento JavaScript

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input")

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerHTML = "Nicolas eres el mejor"; //convierte todo a lenguaje HTML dentro de la etiqueta h1
h1.innerText = "Nicolas eres el mejor"; //convierte todo a texto dentro de la etiqueta de h1

console.log(h1.getAttribute("class")); //getAttribute captura el valor del atributo que le pasamos
h1.setAttribute("class", "rojo"); //setAttribute modifica el valor del atributo que le pasamos. primero el atributo y luego el nuevo valor

//para trabajar mejor con clase existe classList. Esta tiene diferentes metodos para trabajar con las clases
h1.classList.add("azul");
h1.classList.remove("rojo");
//h1.classList.toggle("rojo");
//h1.classList.contains("rojo");

const img = document.createElement("img"); //con el metodo createElement se puede crear cualquier etiqueta de HTML que se quiera
img.setAttribute("src", "https://static1.personality-database.com/profile_images/5872a218bb964d06bd5c92da1f2167fc.png");

pid.append(img); //el metodo append o appendChild agrega lo que se le pase como contenido a la etiqueta que se le aplique


