Ext.define('Angular.tryout.model.Cat', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'string', mapping: '_id'}, // Mapping for store actions: delete, get, put
		{name: 'naam', type: 'string'},
		{name: 'geboortedatum', type: 'date'},
		{name: 'geslacht', type: 'string'},
		{name: 'gecastreerd', type: 'boolean'},
		{name: 'medicatie', type: 'string'},
		{name: 'dierenarts', type: 'string'},
		{name: 'eigenaar', type: 'string'},
		{name: 'voeding', type: 'string'},
		{name: 'gedrag', type: 'string'},
		{name: 'foto', type: 'string'}
	],
	proxy: {
		type: 'rest',
		url: 'http://localhost:4000/api/cats'
	}
});