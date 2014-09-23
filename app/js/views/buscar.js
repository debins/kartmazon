var Backbone	= require('backbone'),
	$	     	= require('jquery');
	Marcas 		= require('../collections/marcas');
	Modelos 	= require('../collections/modelos');
	Marca 		= require('../models/marca');

module.exports = Backbone.View.extend({
	el: $('#buscar'),
	events:{
		"change #buscarMarca"	: "cargarModelos"
	},
	initialize:function(){
		this.marcas = new Marcas();
		this.modelos = new Modelos();
		this.listenTo(this.marcas,'add',this.addOneMarca,this);
		this.listenTo(this.modelos,'add',this.addOneModelo,this);
		this.fetchMarcas();
	},
	renderMarcas:function(){
		this.marcas.forEach(this.addOneMarca,this);
	},
	renderModelos:function(){
		this.modelos.forEach(this.addOneModelo,this);
	},	
	addOneMarca:function(marca){
		this.$el.find("#buscarMarca").append("<option value="+marca.toJSON().id+">" + marca.toJSON().nombre+ "</option>");
	},
	addOneModelo:function(modelo){
		this.$el.find('#buscarModelo').prepend("<option>"+modelo.toJSON().nombre+"</option>");
	},
	cargarModelos:function(e){
		console.log("cargando modelos "+e.currentTarget.value);
		this.$el.find('#buscarModelo').html("")
		this.modelos = new Modelos();
		var self = this;
		this.modelos.setMarcaID(e.currentTarget.value);
		this.modelos.fetch({
			success:function(){
				self.modelos.magiaPaginada(self.modelos.toJSON());
				if(self.modelos.length<1){
					self.modelos.add({value:0,nombre:"Sin modelos"});
				}
				self.renderModelos();
				console.log(self.modelos.length);
			}
		});
		console.log(this.modelos.marcaID);
	},
	fetchMarcas:function(){
		var self = this;
		var x = this.marcas.fetch({
			success: function(){
				//var marcas = self.marcas.toJSON();
				//console.log(marcas.length);
			}
		});
	},fetchMarca:function(){
		var self = this;
		this.marca = new Marca({id: 1});
		this.marca.fetch({
			success:function(){
				console.log(self.marca.toJSON().nombre);
			}
		});
	}
});