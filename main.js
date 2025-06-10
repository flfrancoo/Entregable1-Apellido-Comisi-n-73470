alert("Bienvenido a nuestro registro de alumnos\nA contunuacion los siguientes Datos por favor");

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");

function pedirEdad() { 
    let edad = parseInt(prompt("Ingrese su edad:"));

    while (edad <= 0 || edad >= 100 || edad !== edad) { // Validar edad válida y que no sea NaN
        edad = parseInt(prompt("ERROR!!!\n Su edad no es válida.\nIngrese su edad:"));  
    }

    return edad;  
}

function pedirNota(){
    let nota = parseInt(prompt("Ingrese su Nota: "));

    while (nota < 0 || nota > 10 || nota !== nota) { // Validar nota entre 0 y 10, y que no sea NaN
        nota = parseInt(prompt("ERROR!!\n Su nota debe ser entre 0 y 10.\nPor favor ingrese de nuevo su nota: "));
    }

    return nota;
}

function carrera() {
    let opcion = parseInt(prompt(
        "Elija una carrera:\n" +
        "1. Licenciatura en Sistemas\n" +
        "2. Contador Público\n" +
        "3. Ingeniería Civil\n" +
        "4. Cocina"
    ));

    while (opcion < 1 || opcion > 4 || opcion !== opcion) { // Validar opción válida y que no sea NaN
        opcion = parseInt(prompt("ERROR!\n Por favor ingrese una opción válida (1-4):"));
    }

    switch(opcion) {
        case 1:
            return "Licenciatura en Sistemas";
        case 2:
            return "Contador Público";
        case 3:
            return "Ingeniería Civil";
        case 4:
            return "Cocina";
    }
}

let edadVerificada = pedirEdad();
let legajo = parseInt(prompt("Ingrese su legajo:"));
let dni = parseInt(prompt("Ingrese su D.N.I:"));
let notaVerificada = pedirNota();
let carreraSeleccionada = carrera();

let arraydatos = [];
arraydatos.push(nombre, apellido, edadVerificada, legajo, dni, notaVerificada, carreraSeleccionada);

let datos = {
  nombre: nombre,
  apellido: apellido,
  edad: edadVerificada,
  legajo: legajo,
  dni: dni,
  nota: notaVerificada,
  carrera: carreraSeleccionada
};

let mensaje = 
    
  "Nombre: " + datos.nombre + "\n" +
  "Apellido: " + datos.apellido + "\n" +
  "Edad: " + datos.edad + "\n" +
  "Legajo: " + datos.legajo + "\n" +
  "DNI: " + datos.dni + "\n" +
  "Nota: " + datos.nota + "\n" +
  "Carrera: " + datos.carrera;

alert(mensaje);