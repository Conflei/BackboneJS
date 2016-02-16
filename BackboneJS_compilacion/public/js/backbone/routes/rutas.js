var rutas = Backbone.Router.extend({

	//Definimos las rutas de nuestra app
	routes: 
	{
		//Enrutamiento estatico
		'home': 'homepage',
		'proyectos': 'proyect',

		//Enrutamiento Dinamico
		'proyectos/:id' : 'detalle'
	},

	// Definimos las funciones que les asociamos a las rutas
	homepage: function()
	{
		console.log("Home");
	},
	proyect: function()
	{
		console.log("Proyects");
	},

	//funcion de enrutamiento dinamico
	detalle: function(id)
	{
		console.log("Dame el proyecto "+id);
	}

});

var route = new rutas();
Backbone.history.start(); 

//Con Navigate podemos tener control sobre la navegabilidad de los links en nuestra aplicacion
//Backbone.history.navigate('proyectos');