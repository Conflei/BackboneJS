var Maletin = Backbone.View.extend({
	el: '#app', 

	initialize: function()
	{

		//En cada llamada a la funcion -add- de proyectos se ejecutara mostrarProyecto
		proyectos.on('add', this.mostrarProyecto);

		proyectos.fetch();
	},

	mostrarProyecto: function(modelo)
	{
		//console.log(modelo.toJSON());

		//Se define la variable a concatenar en nuestro html
		var vista = new MostrarProyectoView({model:modelo});

		//Se concatena la variable
		$('.proyectos').append( vista.render().$el);
	}
});

//Antes de esto debemos crear el template en index.html
var MostrarProyectoView = Backbone.View.extend({

	//Aqui llamamos a underscore
	template: _.template( $('#tplMostrarProyecto').html() ),

	//Esto es para ejemplificar Rutas
	events: {
		'click h2' : 'detalle'
	},

	render: function()
	{
		//Llamamos a nuestra propiedad 'el' con jQuery y le pasamos nuestro template con el contenido del modelo
		// Se mapea automaticamente a las variables de nuestro html
		this.$el.html( this.template( this.model.toJSON()));

		return this;
	},

	//Esto es para rutas
	detalle: function()
	{
		//Navegamos a la url con trigger true, que indicara que la URL pertenece a la aplicacion
		Backbone.history.navigate('proyectos/' + this.model.get('id'), {trigger:true});
	}
});

var appView = new Maletin();