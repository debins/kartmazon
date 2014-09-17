var Backbone	= require('backbone'),
	$			= require('jquery');

module.exports = Backbone.View.extend({
	el: document,
	events:{
		"click #navBuscar"	: "navBuscar",
		"click #navMenu"	: "navMenu",
		"click #menu>li>a"		: "link"
	},
	navBuscar: function() { 
    	Backbone.app.home();
  	},
  	navMenu: function(){
  		console.log("navMenu menu");
  	},
  	link:function(e){
  		e.preventDefault;
  		console.log(e.currentTarget.innerHTML);
  	}
});