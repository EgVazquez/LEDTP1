function contchar(obj) {
    var maxLength = 500;
    var strLength = obj.value.length;
    var restantes = (maxLength - strLength);
    if (restantes < 0) {
        document.getElementById("resultado").innerHTML = '<span style= "color: red;"> SUPERO EL LIMITE PERMITIDO DE ' + maxLength + ' caracteres</span>';
    } else {
        document.getElementById("resultado").innerHTML = 'usaste ya ' + strLength + ' caracteres de ' + restantes + ' Caracteres';
    }
}

function obtenerfecha(c) {
    var d = document.getElementById('Fecha Nacimiento').value;
    var enfecha = new Date(d);
    var anio = enfecha.getFullYear();
    var fecha = new Date();
    var anioactual = fecha.getFullYear();
    var edad = anioactual - anio;
    if (edad >= 18) {
        document.getElementById("salida").innerHTML = edad + " Es mayor de edad";

    } else {
        document.getElementById("salida").innerHTML = "No puede ingresar si es menor de 18 años";

    }
}