//Function for class extends
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}

//RequireJS configuration
require.config({baseUrl: "scripts/",});

/**
 *	@class App
 *
 * Class Main do aplicação tem contém métodos usados na aplicação inteira e regras de prevenções
 * @important Todas as class devem extender ela
 */
var App = (function(){
	_prototype = App.prototype;

	//Constructor
	function App(){
		var _self = this;

		_self.clickSubmit();
	}

	/**
	 * @method clickSubmit
	 *
	 * Todos os button[type=submit] ao serem clicados entraram nesta regra e ficaram disabled
	 */
	_prototype.clickSubmit = function(){
		$('button[type=submit]').unbind().click(function(e){
			e.preventDefault();
			
			$(this).attr('disabled','disabled');
		});
	};

	return App;
})();

new App();