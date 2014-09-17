var Backbone	= require('backbone'),
	Utils		= require('../utils/utils');
	ViewMain	= require('../views/main');
	$			= require('jquery')

module.exports = Backbone.Router.extend({
	routes:{
		"" : "home",
		"login":"login",
		"hola":"test"
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
		console.log("home");
	},
	login:function(){
		this.loginView = new Login();
		this.loginView.render();
	},
	test:function(){
		this.agendaView = new Agenda();
		this.agendaView.render();
	}
});