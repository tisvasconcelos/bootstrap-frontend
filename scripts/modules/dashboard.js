var Dashboard = (function(_super){
	__extends(Dashboard,_super);
	_prototype = Dashboard.prototype;

	//Constructor
	function Dashboard(){
		var _self = this;
		_super.call(_self);

		//Utils
		Utils = new Utils();
		_self.Utils = Utils.prototype;

		_self.clickButton();
	}

	/**
	 * @method clickSubmit
	 *
	 * Ao clicar no button muda seu value para "Aguarde..."
	 */
	_prototype.clickButton = function(){
		$('button').click(function(e){
			e.preventDefault();
			$(this).html("Aguarde...");
		});
	};

	return Dashboard;
})(App);

require(['helpers/utils'],function(){
	//Autoload class if dependencies are load
	new Dashboard();
});