var Backbone 	= require('backbone'),
    Marca     	= require('../models/marca'),
    Globals		= require('../utils/Globals');

module.exports = Backbone.Collection.extend({
	model: Marca,
	url: function(){
		return Globals.url+'marca/';
	}
});