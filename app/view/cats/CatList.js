Ext.define('Angular.tryout.view.cats.CatList', {
	extend: 'Ext.view.View',
	xtype: 'catlist',

	requires: [
		'Angular.tryout.store.Cat',

		'Angular.tryout.view.cats.CatListController'
	],

	store: {
		type: 'cat'
	},

	controller: 'catList',

	listeners: {
		afterrender: 'afterrender'
	},

	emptyText: 'No images to display',
	itemSelector: 'div.thumb-wrap',
	tpl: new Ext.XTemplate(
		'<tpl for=".">',
		'<div style="margin-bottom: 10px;" class="thumb-wrap">',
		'<img src="{foto}" style="max-height: 300px;max-width: 300px; object-fit: contain;"/>',
		'<br/><span>{naam}</span>',
		'</div>',
		'</tpl>'
	)
});
