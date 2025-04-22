

function calcSimple() {
    try {
        let res;

        const num1 = parseInt(document.getElementById("valor1").value);
        const num2 = parseInt(document.getElementById("valor2").value);
        const operador = document.getElementById("operador").value;
        switch (operador) {
            case "sumar":
                res = num1 + num2;
                break;

            case "restar":
                res = num1 - num2;
                break;

            case "mult":
                res = num1 * num2;
                break;

            case "divis":
                if (num2 == 0) {
                    throw new Error("No se puede dividir entre 0");
                }
                res = num1 / num2;
                break;
        }

        alert("El resultado es: " + res);
    } catch (error) {
        alert("Error: " + error.message);
    }
}

//Cuadrado

function cuadrado() {
    try {
        const tamanio = parseInt(document.getElementById("tamCuad").value);
        const tamAux = tamanio;

        if (tamanio > screen.width || tamanio > screen.height) {
            throw new Error("El tamaño ingresado es mayor al tamaño de la pantalla.");
        }
        
        var texto = "";
        for (var i = 0; i < tamanio; i++) {
            for (var j = 0; j < tamanio; j++) {
                texto = texto + "#";
            }
            texto += "\n";
        }

        alert(texto);


    } catch (error) {
        alert("Error: " + error.message);
    }
}

function cuadrado5() {
    var texto = "";
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            texto = texto + "#";
        }
        texto = texto + "\n";
    }
    alert(texto);
}

function cuadradoDinamico() {
    var texto = "";
    var cant_filas = parseInt(document.getElementById("filasCuad").value);
    var cant_columnas = parseInt(document.getElementById("columnasCuad").value);
    var simb = document.getElementById("simboloCuad").value;
    for (i = 0; i < cant_filas; i++) {
        for (j = 0; j < cant_columnas; j++) {
            texto = texto + simb;
        }
        texto = texto + "\n";
    }

    alert(texto);
}
