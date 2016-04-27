/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Angular.tryout.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	tabChange: function (tabPanel, newCard) {
		return this.redirectTo('/' + newCard.id);
	}
});
