var proyectosCollection = Backbone.Collection.extend({
	model: Proyecto,
	url:'/proyectos'
});

var proyectos = new proyectosCollection();