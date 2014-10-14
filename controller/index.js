module.exports = function(app) {
              
	app.get('/', function(req, res) {

		var json = {
			viewName: "landing",
			baseTemplate: 'base',
			data: {			
			}
		};

		if(req.header('X-Requested-With') == 'XMLHttpRequest') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.write(JSON.stringify(json));
			res.end();
		}
		else {
			res.render("public/templates/" + json.baseTemplate,json);
		}

	});

}


