/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Angular.tryout.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'Angular.tryout.view.main.MainController',
		'Angular.tryout.view.main.MainModel',
		'Angular.tryout.view.main.List'
	],

	controller: 'main',
	viewModel: 'main',

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
		// The following grid shares a store with the classic version's grid as well!
		items: [{
			xtype: 'mainlist'
		}]
	}, {
		title: 'Eigenaars',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Verblijvingen',
		bind: {
			html: '{loremIpsum}'
		}
	}]
});
