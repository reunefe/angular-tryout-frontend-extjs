Ext.define('Angular.tryout.view.owners.OwnerListController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.ownerList',

	beforerender: function (item) {
		item.getStore().load();
	}
});
