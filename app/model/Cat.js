Ext.define('Angular.tryout.model.Cat', {
	extend: 'Ext.data.Model',

	fields: [
		{name: '_id', type: 'string'},
		{name: 'naam', type: 'string'},
		{name: 'geboortedatum', type: 'date'},
		{name: 'geslacht', type: 'string'},
		{name: 'gecastreerd', type: 'boolean'},
		{name: 'medicatie', type: 'string'},
		{name: 'dierenarts', type: 'string'},
		{name: 'eigenaar', type: 'string'},
		{name: 'voeding', type: 'string'},
		{name: 'gedrag', type: 'string'}
	]
});