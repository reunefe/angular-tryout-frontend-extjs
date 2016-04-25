Ext.define('Angular.tryout.store.Cat', {
	extend: 'Ext.data.Store',

	alias: 'store.cat',
	model: 'Angular.tryout.model.Cat',
	proxy: {
		type: 'rest',
		url: 'http://localhost:4000/api/cats'
	},
	autoLoad: true
});
