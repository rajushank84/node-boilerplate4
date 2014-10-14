define([
	'jquery', 
	'backbone',
	'../../jsdust/about'
	], 
	function($, Backbone, template){
	
		var View = Backbone.View.extend({
		
			el: '#about',
		
			render: function(json) {}
		});
		
		return View;
	}
);
