//RequireJS configuration
require.config({
	baseUrl: "http://localhost/bootstrap-fe/scripts/"
});

//QUnit done
QUnit.done(function(){
	$('#workspace').remove();
});

//QUnit.config.autostart = false;