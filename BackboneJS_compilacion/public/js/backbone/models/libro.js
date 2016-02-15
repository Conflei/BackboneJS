var Libro = Backbone.Model.extend(
	{
		urlRoot:'/libros',

		initialize: function()
		{
			console.log('Se ha creado una nueva instancia');

			this.on('change', function(){
							console.log('El modelo ha cambiado');
						});
			

		},
		validate: function(atributos)
		{
			if(!atributos.titulo)
			{
				return 'Debe tener un titulo';
			}
		},
		defaults:
		{
			autor:'Desconocido'
		}
	});

