//RequireJS configuration
require.config({
	baseUrl: "http://tisvasconcelos.github.com/bootstrap-frontend/scripts/"
});

//QUnit done
QUnit.done(function(){
	$('#workspace').remove();
});

//QUnit.config.autostart = false;