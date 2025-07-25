//ENTRAGA PRACTICA numero 1
// alert("Bienvenido a nuestro registro de alumnos\nA contunuacion los siguientes Datos por favor");

// let nombre = prompt("Ingrese su nombre:");
// let apellido = prompt("Ingrese su apellido:");

// function pedirEdad() { 
//     let edad = parseInt(prompt("Ingrese su edad:"));

//     while (edad <= 0 || edad >= 100 || edad !== edad) { // Validar edad válida y que no sea NaN
//         edad = parseInt(prompt("ERROR!!!\n Su edad no es válida.\nIngrese su edad:"));  
//     }

//     return edad;  
// }

// function pedirNota(){
//     let nota = parseInt(prompt("Ingrese su Nota: "));

//     while (nota < 0 || nota > 10 || nota !== nota) { // Validar nota entre 0 y 10, y que no sea NaN
//         nota = parseInt(prompt("ERROR!!\n Su nota debe ser entre 0 y 10.\nPor favor ingrese de nuevo su nota: "));
//     }

//     return nota;
// }

// function carrera() {
//     let opcion = parseInt(prompt(
//         "Elija una carrera:\n" +
//         "1. Licenciatura en Sistemas\n" +
//         "2. Contador Público\n" +
//         "3. Ingeniería Civil\n" +
//         "4. Cocina"
//     ));

//     while (opcion < 1 || opcion > 4 || opcion !== opcion) { // Validar opción válida y que no sea NaN
//         opcion = parseInt(prompt("ERROR!\n Por favor ingrese una opción válida (1-4):"));
//     }

//     switch(opcion) {
//         case 1:
//             return "Licenciatura en Sistemas";
//         case 2:
//             return "Contador Público";
//         case 3:
//             return "Ingeniería Civil";
//         case 4:
//             return "Cocina";
//     }
// }

// let edadVerificada = pedirEdad();
// let legajo = parseInt(prompt("Ingrese su legajo:"));
// let dni = parseInt(prompt("Ingrese su D.N.I:"));
// let notaVerificada = pedirNota();
// let carreraSeleccionada = carrera();

// let arraydatos = [];
// arraydatos.push(nombre, apellido, edadVerificada, legajo, dni, notaVerificada, carreraSeleccionada);

// let datos = {
//   nombre: nombre,
//   apellido: apellido,
//   edad: edadVerificada,
//   legajo: legajo,
//   dni: dni,
//   nota: notaVerificada,
//   carrera: carreraSeleccionada
// };

// let mensaje = 
    
//   "Nombre: " + datos.nombre + "\n" +
//   "Apellido: " + datos.apellido + "\n" +
//   "Edad: " + datos.edad + "\n" +
//   "Legajo: " + datos.legajo + "\n" +
//   "DNI: " + datos.dni + "\n" +
//   "Nota: " + datos.nota + "\n" +
//   "Carrera: " + datos.carrera;

// alert(mensaje);

//ENTREGA PRACTICA numero 2

// let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
// const campoNombre = document.getElementById("campoNombre");
// const campoApellido = document.getElementById("campoApellido");
// const campoEdad = document.getElementById("campoEdad");
// const btnRegistrar = document.getElementById("btnRegistrar");
// const listaAlumnos = document.getElementById("listaAlumnos");

// mostrarAlumnos();


// btnRegistrar.addEventListener("click", () => {
//   const nombre = campoNombre.value.trim();
//   const apellido = campoApellido.value.trim();
//   const edad = parseInt(campoEdad.value.trim());

//   if (!nombre || !apellido || isNaN(edad)) {
//     alert("Por favor completá todos los campos.");
//     return;
//   }

//   const nuevoAlumno = { nombre, apellido, edad };
//   alumnos.push(nuevoAlumno);

//   localStorage.setItem("alumnos", JSON.stringify(alumnos));

//   campoNombre.value = "";
//   campoApellido.value = "";
//   campoEdad.value = "";

//   mostrarAlumnos();
// });


// function mostrarAlumnos() {
//   listaAlumnos.innerHTML = "";

//   if (alumnos.length === 0) {
//     listaAlumnos.innerHTML = "<p>No hay alumnos registrados.</p>";
//     return;
//   }

//   alumnos.forEach((alumno, index) => {
//     const parrafo = document.createElement("p");
//     parrafo.textContent = `${index + 1}. ${alumno.nombre} ${alumno.apellido} - Edad: ${alumno.edad}`;
//     listaAlumnos.appendChild(parrafo);
//   });
// }


//PROYECTO FINAL
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("contenedor-productos");
const verCarritoBtn = document.getElementById("ver-carrito");
const carritoDiv = document.getElementById("carrito");
const itemsCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total-carrito");
const cantidadCarrito = document.getElementById("cantidad-carrito");
const vaciarBtn = document.getElementById("vaciar-carrito");

fetch("../data/productos.json")
  .then(res => res.json())
  .then(productos => {
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      contenedor.appendChild(div);
    });

    window.agregarAlCarrito = function(id) {
      const producto = productos.find(p => p.id === id);
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    };
  });

verCarritoBtn.addEventListener("click", () => {
  carritoDiv.classList.toggle("oculto");
  mostrarCarrito();
});

vaciarBtn.addEventListener("click", () => {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
  mostrarCarrito();
});

function mostrarCarrito() {
  itemsCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.nombre} - $${item.precio} <button onclick="eliminarItem(${index})">❌</button></p>
    `;
    itemsCarrito.appendChild(div);
    total += item.precio;
  });

  totalCarrito.innerText = total;
}

function actualizarCarrito() {
  cantidadCarrito.innerText = carrito.length;
}

function eliminarItem(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
  mostrarCarrito();
}

actualizarCarrito();