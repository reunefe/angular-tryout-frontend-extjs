Ext.define('Angular.tryout.view.cats.CatListController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.catList',

	afterrender: function (item) {
		item.getStore().load();
	}
});