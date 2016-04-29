Ext.define('Angular.tryout.view.owners.OwnerForm', {
	extend: 'Ext.window.Window',
	xtype: 'ownerForm',

	requires: [
		'Ext.form.Panel',

		'Angular.tryout.view.owners.OwnerFormController'
	],

	controller: 'ownerForm',
	title: 'Registreer eigenaar',
	autoShow: true,
	modal: true,

	items: {
		xtype: 'form',
		reference: 'form',
		bodyPadding: 10,
		fieldDefaults: {
			width: 450
		},
		defaultType: 'textfield',
		items: [{
			xtype: 'filefield',
			name: 'file',
			fieldLabel: 'Afbeelding'
		}, {
			fieldLabel: 'Voornaam',
			name: 'voornaam',
			allowBlank: false
		}, {
			fieldLabel: 'Familienaam',
			name: 'familienaam',
			allowBlank: false
		}, {
			fieldLabel: 'Straat',
			name: 'adres.straat'
		}, {
			fieldLabel: 'Nummer',
			name: 'adres.nummer'
		}, {
			fieldLabel: 'Postcode',
			name: 'adres.postcode'
		}, {
			fieldLabel: 'Gemeente',
			name: 'adres.gemeente'
		}, {
			fieldLabel: 'Email',
			name: 'email'
		}, {
			fieldLabel: 'Telefoonnummer',
			name: 'telefoonnummer',
			allowBlank: false
		}, {
			fieldLabel: 'Noodnummer',
			name: 'noodnummer'
		}],
		buttons: [{
			text: 'Annuleer',
			listeners: {
				click: 'onCancel'
			}
		}, {
			text: 'Registreer Eigenaar',
			formBind: true,
			listeners: {
				click: 'onRegister'
			}
		}]
	}
});