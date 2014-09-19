var Backbone	= require('backbone'),
	Utils		= require('../utils/utils');
	ViewMain	= require('../views/main');
	$			= require('jquery');
	BuscaView	= require('../views/buscar')

module.exports = Backbone.Router.extend({
	routes:{
		"" : "home"
	},
	initialize : function(){
//		this.galleta = Utils.getCookie('debinConsul');
		this.main = new ViewMain();
		Backbone.history.start({pushState: false});
		
		if (this.galleta == ""){
//			this.navigate("login", {trigger: true});
		}else{
//			this.navigate("hola", {trigger: true});
		}

		
	},
	home:function(){
		this.buscaView = new BuscaView();
	}
});