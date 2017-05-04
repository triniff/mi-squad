function Squad(nombre,edad,hobbies){
	this.nombre = nombre
	this.edad = edad

	this.mostrar = function (){
		return ("Nombre: " + this.nombre + "<br>" + "Edad: " + this.edad + "<br>" +  "Hobbies: " + this.hobbies)
	}
}


var valeLopez = new Squad ("valentina lopez", 25, ["Tarot", "Idiomas", "Películas mudas"]);
var trini = new Squad("Trinidad Fuentes", 26, ["Video juegos", "PugLover", "Dormir"]);
var diana = new Squad("Diana Monsalve", 29,  ["Hacer scratch", "Música", "Negocios"]);
var dani = new Squad("Daniela Sanchez", 24,["Escuchar música", "Cantar", "Ver series"]);
var pez = new Squad("María Paz Rojas", 26, ["Música","Comer", "Hablar ingles"]);
var mari = new Squad("Maribel Diaz", 30,["Salir a tomar café y comer muffins" , "El silencio", "Escribir"]);
var valeT = new Squad("Valentina Toledo", 20, ["Jugar fútbol", "Música", "Actividades al aire libre"]);
var kari = new Squad("Karina Palacios", 24, ["Ver series", "Compartir con amigos", "Leer y escuchar música"]);
var gilia = new Squad ("Gilia Gongora", 28, ["La destrución", "Satán", "Infierno"]);

datosValeL.innerHTML = valeLopez.mostrar();
