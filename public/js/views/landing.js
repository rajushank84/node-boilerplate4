define([
	'jquery', 
	'backbone',
	'../../jsdust/landing'
	], 
	function($, Backbone, template){
	
		var View = Backbone.View.extend({
		
			el: '#landing',
		
			render: function(json) { }
		});
		
		return View;
	
	}
);
