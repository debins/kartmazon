var Backbone 	= require('backbone'),
    Modelo     	= require('../models/modelo'),
    Globals		= require('../utils/Globals');

module.exports = Backbone.Collection.extend({
	model: Modelo,
	marcaID:0,
	setMarcaID:function(id){
		this.marcaID = id;
	},
	url: function(){
		if(this.marcaID == 0){
			return Globals.url+'modelo/';
		}else{
			return Globals.url+'modelo/?marca=' + this.marcaID;
		}
		
	},
	magiaPaginada:function(objeto){
		this.reset();
		var modelo = {};
		for(var i=0;i<objeto.length;i++){
			for(var j=0;j<objeto[i].results.length;j++){
				this.add(new Modelo(objeto[i].results[j]));
			}
		}
	}
});