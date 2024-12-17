var preguntass = [
    {pregunta:"Cual es la luna mas grande del sistema solar",respuesta:"ganimedes"},
    {pregunta:"Cual fue la primera persona en el espacio",respuesta:"yuri gagarin"},
    {pregunta:"Cual fueron los nombres de mis antiguos perritos(incluyendo hija)",respuesta:"darky puka samara"},
    {pregunta:"Como puedes levantar un elefante con una mano",respuesta:"no puedes, porque no existen elefantes con manos"}
]
var indice = 0;
MosPre();
function MosPre() {
    document.getElementById("pregunta").innerHTML=preguntass[indice].pregunta;
}
var PreRes = 0;
function sipre() {
    document.getElementById("respuesta").value="";
    indice++;
    PreRes++;
    if (indice>=preguntass.length){
        ResultadoFinal();
    }
    else {
        MosPre();
        tempo();
    }
}
function ResultadoFinal() {
    var resultado = "YAY!!! Obtenistes " + puntuacion + " puntos. WOW NUNCA E VISTO ALGUIEN TENER TANTOS pero... necesitabas " + preguntass.length + " de puntos pero eso esta bien :)";
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("pregunta").innerHTML = "";
    document.getElementById("respuesta").innerHTML = "";
    document.getElementById("tiempo").innerHTML = "";
    document.getElementById("siguiente").disabled = true;
    clearInterval(tempos);
}

var puntuacion = 0;
function checear() {
var respuesta = document.getElementById("respuesta").value;
if (respuesta.toLowerCase()==preguntass[indice].respuesta.toLowerCase()) {
document.getElementById("resultado").innerHTML = "MUY BIEN. GANASTE. Eres la persona mas inspirativa del mundo que bien :) ";
puntuacion++;
clearInterval(tempos);
}
else {
    document.getElementById("resultado").innerHTML = "La sacaste mal Pero no pasa nada porque siempre aprendes de un error <3 Una pista es que es";
}
document.getElementById("puntuacion").innerHTML = "Que FANTASTICO nunca eh visto alguien sacar un " + puntuacion;
}
var tiempo = 50;
var tempos;
function tempo() {
    tempos = setInterval(function(){
        document.getElementById("tiempo").innerHTML = tiempo;
        tiempo--;
        if (tiempo<0) {
            clearInterval(tempos);
            document.getElementById("tiempo").innerHTML = "No te preocupes, la siguiente vez seras mas rapido <3";
            checear();
            MosPre();
            ResultadoFinal();
        }
    },1000);
}