/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 */
Ext.define('Angular.tryout.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'Angular.tryout.view.main.MainController',
		'Angular.tryout.view.cats.CatList',
		'Angular.tryout.view.owners.OwnerList'
	],

	controller: 'main',
	ui: 'navigation',

	titleRotation: 0,
	tabRotation: 0,

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	defaults: {
		bodyPadding: 20
	},

	items: [{
		title: 'Katten',
		id: 'cats',
		// The following grid shares a store with the classic version's grid as well!
		items: [{
			xtype: 'catlist'
		}]
	}, {
		title: 'Eigenaars',
		id: 'owners',
		items: [{
			xtype: 'ownerlist'
		}]
	}, {
		title: 'Verblijvingen',
		id: 'stays'
	}]
});
