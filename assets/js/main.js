function Squad(nombre,edad,hobbies){
	this.nombre = nombre
	this.edad = edad
	this.hobbies = hobbies;

	this.lista = function(){
			var final = "";
			for(var i = 0; i < this.hobbies.length; i++){
				final += "<li>" + this.hobbies[i] + "</li>";
			}
			return final;
	}
	this.mostrar = function (){
		return ("<b>" + "Nombre: " + "</b>" + this.nombre + "<br>" + "<b>" + "Edad: " +  "</b>"  + this.edad + " años" + "<br>" + "<b>" +  "Hobbies: " + "</b>" + "<ul>" + this.lista() +"</ul>")
	}
}


var valeLopez = new Squad ("Valentina Lopez", 25, ["Tarot", "Idiomas", "Películas mudas"]);
var trini = new Squad("Trinidad Fuentes", 26, ["Video juegos", "PugLover", "Dormir"]);
var diana = new Squad("Diana Monsalve", 29,  ["Hacer scratch", "Música", "Negocios"]);
var dani = new Squad("Daniela Sanchez", 24,["Escuchar música", "Cantar", "Ver series"]);
var pez = new Squad("María Paz Rojas", 26, ["Música","Comer", "Hablar ingles"]);
var mari = new Squad("Maribel Diaz", 30,["Salir a tomar café y comer muffins" , "El silencio", "Escribir"]);
var valeT = new Squad("Valentina Toledo", 20, ["Jugar fútbol", "Música", "Actividades al aire libre"]);
var kari = new Squad("Karina Palacios", 24, ["Ver series", "Compartir con amigos", "Leer y escuchar música"]);
var gilia = new Squad ("Gilia Gongora", 28, ["La destrución", "Satán", "Infierno"]);

datos.innerHTML = valeLopez.mostrar() + "<br>" + trini.mostrar() + "<br>" + diana.mostrar() + "<br>" + dani.mostrar() + "<br>" + pez.mostrar() + "<br>" + mari.mostrar() + "<br>" + valeT.mostrar() + "<br>" + kari.mostrar() + "<br>" + gilia.mostrar();
