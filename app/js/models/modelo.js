var Backbone = require('backbone'),
    Globals		= require('../utils/Globals');

module.exports = Backbone.Model.extend({
	urlRoot : function(){
		return Globals.url + 'modelo/';
	}
});