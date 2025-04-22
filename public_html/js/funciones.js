

function calcSimple() {
    alert("Elija una operacion:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir");
    var opc = parseInt(window.prompt("Ingrese la operacion: "));

    try {

        switch (opc) {
            case 1:
                sumaSimple();
                break;

            case 2:
                restaSimple();
                break;

            case 3:
                multSimple();
                break;

            case 4:
                divSimple();
                break;

            default:
                alert("Opcion no valida");
                break;
        }
    } catch (error) {
        alert("Error: " + error.message); // Mostrar el mensaje de error al usuario
    }


}

function sumaSimple() {
    var num1 = parseInt(window.prompt("Ingrese el primer valor: "));
    var num2 = parseInt(window.prompt("Ingrese el segundo valor: "));
    var res = num1 + num2;

    alert(num1 + " + " + num2 + " = " + res);
}

function restaSimple() {
    var num1 = parseInt(window.prompt("Ingrese el primer valor: "));
    var num2 = parseInt(window.prompt("Ingrese el segundo valor: "));
    var res = num1 - num2;

    alert(num1 + " - " + num2 + " = " + res);
}

function divSimple() {
    var num1 = parseInt(window.prompt("Ingrese el primer valor: "));
    var num2 = parseInt(window.prompt("Ingrese el segundo valor: "));

    if (num2 == 0) {
        throw new Error("No se puede dividir entre 0");
    }
    var res = num1 / num2;

    alert(num1 + " / " + num2 + " = " + res);
}

function multSimple() {
    var num1 = parseInt(window.prompt("Ingrese el primer valor: "));
    var num2 = parseInt(window.prompt("Ingrese el segundo valor: "));
    var res = num1 * num2;

    alert(num1 + " * " + num2 + " = " + res);
}

//Cuadrado

function cuadrado() {
    try {
        let cant = parseInt(window.prompt("Ingrese el tamaño del cuadrado"));
        let simbolo = window.prompt("Ingrese el símbolo con el que desea dibujar");

        if (isNaN(cant) || cant <= 0) {
            throw new Error("Tamaño no válido.");
        }

        let linea = simbolo.repeat(cant); // crea una línea con el símbolo repetido

        for (let i = 0; i < cant; i++) {
            console.log(linea);
        }

    } catch (error) {
        alert("Error: " + error.message);
    }
}
