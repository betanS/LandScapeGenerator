
solicitar("hora", "hora", "Hora del día (0-23)", 12); //LLamamos a la función solicitar y le pasamos los parámetros
puertas = solicitar("numPuerta", "number", "Número de puerta", 1);
ofertas = solicitar("escaparatesOfer", "string", "Oferta en escaparates", "buenaOferta");
solicitar("escaparates", "number", "Cantidad de escaparates", 1);
solicitar("coches", "number", "Cantidad de coches", 1);
solicitar("semaforo", "semaforo", "Color del semáforo (verde, rojo, amarillo)", "verde");

function checkear(variable, tipo){ //La función checkear recibe los parámetros variable y tipo
    if (tipo == "number"){ //Si el tipo es number comprobamos que la variable es un número entre 0 y 5 y que sea un numero, si falla devuelve true.
            if (variable > 5 || variable < 0 || isNaN(variable)) {
                alert("Número no válido, debe ser mayor que 0 y menor que 5.");
                console.log("Valor incorrecto: " + variable);
                return result = true;
            }
        }else if (tipo == "semaforo"){ //Si el tipo es semaforo comprobamos que la variable es rojo/amarillo/verde, si falla devuelve true.
            switch(variable){
                case "verde":
                case "rojo":
                case "amarillo":
                    break;
                default:
                    alert("Semáforo no válido, debe ser verde, rojo o amarillo.");
                    console.log("Valor incorrecto: " + variable);
                    return result = true;
            }
        }else if (tipo == "hora"){//Si el tipo es hora comprobamos que la variable es un número entre 0 y 23 y que sea un numero, si falla devuelve true.
            if (variable < 0 || variable > 23 || isNaN(variable)){
                alert("Hora no válida, debe ser un número entre 0 y 23.");
                console.log("Valor incorrecto: " + variable);
                return result = true;
            }
        }else if (tipo == "string"){//Si el tipo es string comprobamos que la variable es una cadena de texto, si falla devuelve true.
            if (typeof variable !== "string" || !isNaN(variable)){
                alert("Debe ser una cadena de texto.");
                console.log("Valor incorrecto: " + variable);
                return result = true;
            }
        }
        console.log("Valor correcto: " + variable);
        return result = false; //Si no se cumpre ninguna condición, devuelve false, y el bucle termina.
    }

    function solicitar(nombre, tipo, mensaje, cantidadDefault, posicion){ //La función solicitar recibe los parámetros nombre, tipo(del formato que trabaja), mensaje, cantidadPredeterminada y posición
        var condicion = true; //Establecemos la condición en true para que entre en el bucle
        while (condicion){ //Mientras la condición sea true
            var variable = prompt(mensaje, cantidadDefault); //Pedimos el valor al usuario
            condicion = checkear(variable, tipo); //Comprobamos que el valor es correcto llamando a la funcion checkear, si devuelve true, se repite, si devuelve false, la función continúa.
        }

        if (nombre == "numPuerta"){ //Primero comprobamos si el nombre es numPuerta o escaparatesOfer, si es así, devolvemos la variable sin hacer nada más.
            return variable;
        }else if (nombre == "escaparatesOfer"){
            return variable;
        }

        if (nombre == "escaparates"){   //Si el nombre es escaparates, hacemos un bucle que se repite tantas veces como haya indicado el usuario y añadimos las imágenes al div correspondiente.
            for (var i = 0; i < variable; i++){
            document.getElementById('1').innerHTML += ("<img src='./images/escaparate.png'/><span class='caption'><h3>"+puertas+"<h3/><h3>"+ofertas+"<h3/></span>");
            puertas++;
        }}else if(nombre == "coches"){ //Si el nombre es coches, hacemos un bucle que se repite tantas veces como haya indicado el usuario y añadimos las imágenes al div correspondiente.
            for (var i = 0; i < variable; i++){
            document.getElementById('4').innerHTML += ("<img src='./images/coches.png'/>");
        }}else if(nombre == "semaforo"){ //Si el nombre es semaforo, comprobamos el color y añadimos la imagen correspondiente al div.
            if (variable == "verde")
                document.getElementById('3').innerHTML += ("<img src='./images/semaforoVerde.png'/>");
            else if (variable == "rojo")
                document.getElementById('3').innerHTML += ("<img src='./images/semaforoRojo.png'/>");
            else if (variable == "amarillo")
                document.getElementById('3').innerHTML += ("<img src='./images/semaforoAmarillo.png'/>");
            else
            document.getElementById('3').innerHTML += ("<img src='./images/semaforo.png'/>"); //Si no es ninguno de los tres, añadimos una imagen por defecto.
        }else if(nombre == "hora"){ //Si el nombre es hora, añadimos la hora al div correspondiente.
            document.getElementById('2').innerHTML += ("<span class='reloj'><h3>"+variable+":00<h3/></span>");
        }}
