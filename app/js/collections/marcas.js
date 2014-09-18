var Backbone = require('backbone'),
    Marca     = require('../models/marca');

module.exports = Backbone.Collection.extend({
	model: Marca,
	url: 'http://kartmazon.herokuapp.com/marca/'
});