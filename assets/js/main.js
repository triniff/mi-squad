function Squad(nombre,edad,hobbies, imagen, comentarios){
	this.nombre = nombre
	this.edad = edad
	this.hobbies = hobbies
	this.imagen = imagen
	this.comentarios = comentarios

	this.lista = function(){
			var final = "";
			for(var i = 0; i < this.hobbies.length; i++){
				final += "<li>" + this.hobbies[i] + "</li>";
			}
			return final;
	}
/*
	this.crearImagen = function(){			//* Queria crear una imagen por cada elemento pero no resulto
			var imagen = document.createElement("img"); 
               imagen.setAttribute("src", this.imagen); 
               var div = document.getElementById("imagenPerfil"); 
               div.appendChild(imagen); 
	}

*/
	this.comentar = function(){
			//aquí instanciamos al componente padre
		   var padre = document.getElementById("datos");
		   //aquí agregamos el componente de tipo input
		   var input = document.createElement("textarea");
		   //aquí indicamos que es un input de tipo text
		   input.type = 'text';
		   
		   //y por ultimo agreamos el componente creado al padre
		   padre.appendChild(input);
		   document.comentario.innerHTML = input;
		   
	}

	this.mostrar = function (){
		return (this.imagen + "<b>" + "Nombre: " + "</b>" + this.nombre + "<br>" + "<b>" + "Edad: " +  "</b>"  + this.edad + " años" + "<br>" + "<b>" +  "Hobbies: " + "</b>" + "<ul>" + this.lista() +"</ul>" + '<textarea name="comentario" rows="5" cols="40">Escribe tu comentario....</textarea>' +"<br>" )
	}
}


var valeLopez = new Squad ("Valentina Lopez", 25, ["Tarot", "Idiomas", "Películas mudas"], "<img src='https://68.media.tumblr.com/4c36c178ac67e585eb3ff9e8e2ade08b/tumblr_ndx01kxUkB1ta816ho1_500.png' alt='imagen'>",[]);
var trini = new Squad("Trinidad Fuentes", 26, ["Video juegos", "PugLover", "Dormir"], "<img src='http://globalcdn02.mundotkm.com/2017/02/Pug-5-400x400.jpg' alt='imagen'>",[]);
var diana = new Squad("Diana Monsalve", 29,  ["Hacer scratch", "Música", "Negocios"], "<img src='https://s-media-cache-ak0.pinimg.com/736x/a6/6e/e3/a66ee3dc7b21bf86fb02a391ff385990.jpg' alt='imagen'>",[]);
var dani = new Squad("Daniela Sanchez", 24,["Escuchar música", "Cantar", "Ver series"], "<img src='http://static.tumblr.com/d57a5d85ae77f751b19e0d4d84f4887a/ue97ufl/RlQmvomfz/tumblr_static_ico2.png' alt='imagen'>",[]);
var pez = new Squad("María Paz Rojas", 26, ["Música","Comer", "Hablar ingles"], "<img src='https://s-media-cache-ak0.pinimg.com/736x/71/d6/b2/71d6b2de41e8398af99f8615b4297413.jpg' alt='imagen'>",[]);
var mari = new Squad("Maribel Diaz", 30,["Salir a tomar café y comer muffins" , "El silencio", "Escribir"], "<img src='http://www.laurafuentes.com/wp-content/uploads/2016/10/red_velvet_cupcakes_9-400x400.jpg' alt='imagen'>",[]);
var valeT = new Squad("Valentina Toledo", 20, ["Jugar fútbol", "Música", "Actividades al aire libre"], "<img src='https://s-media-cache-ak0.pinimg.com/564x/a0/3d/5b/a03d5b9721cc9f84d43444b40f46531c.jpg' alt='imagen'>",[]);
var kari = new Squad("Karina Palacios", 24, ["Ver series", "Compartir con amigos", "Leer y escuchar música"], "<img src='http://static.tumblr.com/43bb763c847cd05f5ebab6f29d45135e/gtvqmve/p07mh741f/tumblr_static_astrocat_profile_pic1.jpg' alt='imagen'>",[]);
var gilia = new Squad ("Gilia Gongora", 28, ["La destrución", "Satán", "Infierno"], "<img src='https://pbs.twimg.com/profile_images/598260686318280705/OGecQW82_400x400.jpg' alt='imagen'>",[]);

datos.innerHTML = valeLopez.mostrar() + "<br>" + trini.mostrar() + "<br>" + diana.mostrar() + "<br>" + dani.mostrar() + "<br>" + pez.mostrar() + "<br>" + mari.mostrar() + "<br>" + valeT.mostrar() + "<br>" + kari.mostrar() + "<br>" + gilia.mostrar();
