Ext.define('Angular.tryout.view.cats.CatListController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.catList',

	beforerender: function (view) {
		view.getStore().load();
	}
});