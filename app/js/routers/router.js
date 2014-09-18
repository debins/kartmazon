var Backbone	= require('backbone'),
	Utils		= require('../utils/utils');
	ViewMain	= require('../views/main');
	$			= require('jquery');
	Marcas 		= require('../collections/marcas');
	Marca 		= require('../models/marca');

module.exports = Backbone.Router.extend({
	routes:{
		"" : "home"
	},
	initialize : function(){
//		this.galleta = Utils.getCookie('debinConsul');
		this.main = new ViewMain();
		this.marcas = new Marcas();
		Backbone.history.start({pushState: false});
		
		if (this.galleta == ""){
//			this.navigate("login", {trigger: true});
		}else{
//			this.navigate("hola", {trigger: true});
		}

		
	},
	home:function(){
		console.log("home");
		this.fetchMarcas();
	},
	fetchMarcas:function(){
		console.log("fetching marcas")
		var self = this;
		var x = this.marcas.fetch({
			success: function(){
				var marcas = self.marcas.toJSON();
	        	for(var i=0;i<marcas.length;i++){
	        		console.log(marcas[i].nombre);
				}
			}
		});
		
		this.marca = new Marca({id: 1});
		this.marca.fetch({
			success:function(){
				console.log(self.marca.toJSON().nombre);
			}
		});
	}
});