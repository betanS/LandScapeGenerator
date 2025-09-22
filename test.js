
solicitar("carteles", "number", "Cantidad de carteles", 1);
solicitar("numPuerta", "number", "Número de puerta", 1);
solicitar("canPuerta", "number", "Cantidad de puertas", 1);
solicitar("escaparates", "number", "Cantidad de escaparates", 1);
solicitar("escaparatesOfer", "string", "Oferta en escaparates", "buenaOferta");
solicitar("hora", "hora", "Hora del día (0-23)", 12);
solicitar("semaforo", "semaforo", "Color del semáforo (verde, rojo, amarillo)", "verde");
solicitar("coches", "number", "Cantidad de coches", 1);

function checkear(variable, tipo){
    if (tipo == "number"){
            if (variable > 10 || variable < 0 || isNaN(variable)) {
                alert("Número no válido, debe ser mayor que 0 y menor que 10.");
                return result = true;
            }
        }else if (tipo == "semaforo"){
            switch(variable){
                case "verde":
                case "rojo":
                case "amarillo":
                    break;
                default:
                    alert("Semáforo no válido, debe ser verde, rojo o amarillo.");
                    return result = true;
            }
        }else if (tipo == "hora"){
            if (variable < 0 || variable > 23 || isNaN(variable)){
                alert("Hora no válida, debe estar entre 0 y 23.");
                return result = true;
            }
        }else if (tipo == "string"){
            if (typeof variable !== "string" || !isNaN(variable)){
                alert("Debe ser una cadena de texto.");
                return result = true;
            }
        }
        return result = false;
    }

    function solicitar(nombre, tipo, mensaje, cantidadDefault){
        var condicion = true;
        while (condicion){
            var variable = prompt(nombre, cantidadDefault);
            condicion = checkear(variable, tipo);
        }
        document.writeln(nombre, ": ", variable);
    }
