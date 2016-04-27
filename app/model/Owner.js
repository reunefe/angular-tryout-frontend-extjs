// Adres field type
Ext.define('Angular.tryout.model.Adres', {
	extend: 'Ext.data.field.Field',

	alias: 'data.field.adres',

	convert: function (value) {
		if (value) {
			var straatNr = concatStrings(value.straat, value.nummer, " ");
			var gemeente = concatStrings(value.postcode, value.gemeente, " ");
			return concatStrings(straatNr, gemeente, ", ");
		}
		return "Geen adres";
	}
});

// Owner model

Ext.define('Angular.tryout.model.Owner', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'string', mapping: '_id'}, // Mapping for store actions: delete, get, put
		{name: 'voornaam', type: 'string'},
		{name: 'familienaam', type: 'string'},
		{name: 'email', type: 'string'},
		{name: 'telefoonnummer', type: 'string'},
		{name: 'noodnummer', type: 'string'},
		{name: 'adres', type: 'adres'},
		{name: 'foto', type: 'string'}
	],

	proxy: {
		type: 'rest',
		url: 'http://localhost:4000/api/owners',
		// idParam: '_id', Doesn't work...
		pageParam: '',
		startParam: '',
		limitParam: ''
	}
});

function concatStrings(first, second, spacer) {
	"use strict";

	if (first && second) {
		return first + spacer + second;
	}
	if (first) {
		return first;
	}

	if (second) {
		return second;
	}

	return "";
}