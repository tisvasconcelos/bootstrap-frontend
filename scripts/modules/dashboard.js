var Dashboard = (function(_super){
	__extends(Dashboard,_super);
	self = Dashboard.prototype;

	//Constructor
	function Dashboard(){
		_super.call(self);

		head.js("/scripts/helpers/utils.js");

		self.clickButton();
	}

	/**
	 * @method clickSubmit
	 *
	 * Ao clicar no button muda seu value para "Aguarde..."
	 */
	self.clickButton = function(){
		$('button').click(function(e){
			e.preventDefault();
			$(this).html("Aguarde...");
		});
	}

	return Dashboard;
})(App)();