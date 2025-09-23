
// Variables a solicitar
solicitar("hora", "hora", "Hora del día (0-23)", 12);
puertas = solicitar("numPuerta", "number", "Número de puerta", 1);
ofertas = solicitar("escaparatesOfer", "string", "Oferta en escaparates", "buenaOferta");
solicitar("escaparates", "number", "Cantidad de escaparates", 1);
solicitar("coches", "number", "Cantidad de coches", 1);
solicitar("semaforo", "semaforo", "Color del semáforo (verde, rojo, amarillo)", "verde");

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

    function solicitar(nombre, tipo, mensaje, cantidadDefault, posicion){
        var condicion = true;
        while (condicion){
            var variable = prompt(nombre, cantidadDefault);
            condicion = checkear(variable, tipo);
        }

        if (nombre == "numPuerta"){
            return variable;
        }else if (nombre == "escaparatesOfer"){
            return variable;
        }

        if (nombre == "escaparates"){
            for (var i = 0; i < variable; i++){
            document.getElementById('1').innerHTML += ("<img width='200'height='200'src='./images/escaparate.png'/><div class='text-block'><h3>"+puertas+"<h3/><h3>"+ofertas+"<h3/></div>");
            puertas++;
        }}else if(nombre == "coches"){
            for (var i = 0; i < variable; i++){
            document.getElementById('4').innerHTML += ("<img width='200'height='200'src='./images/coches.png'/>");
        }}else if(nombre == "semaforo"){
            if (variable == "verde")
                document.getElementById('4').innerHTML += ("<img width='200'height='200'src='./images/semaforoVerde.png'/>");
            else if (variable == "rojo")
                document.getElementById('4').innerHTML += ("<img width='200'height='200'src='./images/semaforoRojo.png'/>");
            else if (variable == "amarillo")
                document.getElementById('4').innerHTML += ("<img width='200'height='200'src='./images/semaforoAmarillo.png'/>");
            else
            document.getElementById('4').innerHTML += ("<img width='200'height='200'src='./images/semaforo.png'/>");
        }else if(nombre == "hora"){
            document.getElementById('2').innerHTML += ("<img width='200'height='200' src='./images/reloj.png'/><div class='text-block'><h3>"+variable+"<h3/></div>");
        }}
