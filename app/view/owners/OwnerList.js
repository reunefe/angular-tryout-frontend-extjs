Ext.define('Angular.tryout.view.owners.OwnerList', {
	extend: 'Ext.grid.Panel',
	xtype: 'ownerlist',

	requires: [
		'Ext.grid.column.Template',
		'Ext.grid.column.Action',

		'Angular.tryout.store.Owner',

		'Angular.tryout.view.owners.OwnerListController'
	],

	controller: 'ownerList',

	store: {
		type: 'owner'
	},

	listeners: {
		afterrender: 'afterrender'
	},

	columns: [
		{
			xtype: 'templatecolumn',
			tpl: '<img src="{foto}" alt="{naam}" style = "max-height: 100px;max-width: 100px" />',
			width: 120,
			menuDisabled: true,
			sortable: false
		},
		{text: 'Voornaam', dataIndex: 'voornaam', flex: 1},
		{text: 'Familienaam', dataIndex: 'familienaam', flex: 1},
		{text: 'Email', dataIndex: 'email', minWidth: 200},
		{text: 'Telefoonnr', dataIndex: 'telefoonnummer'},
		{text: 'Noodnr', dataIndex: 'noodnummer'},
		{text: 'Adres', dataIndex: 'adres', minWidth: 300},
		{
			xtype: 'actioncolumn',
			width: 50,
			menuDisabled: true,
			sortable: false,
			items: [
				// {
				// 	icon: '/resources/images/edit.png',  // Use a URL in the icon config
				// 	iconCls: 'x-action-col-icon',
				// 	tooltip: 'Edit',
				// 	handler: function (grid, rowIndex, colIndex) {
				// 	}
				// },
				{
					icon: '/resources/images/delete.png',
					iconCls: 'x-action-col-icon',
					tooltip: 'Delete',
					handler: function (grid, rowIndex, colIndex) {
						var record = grid.getStore().getAt(rowIndex);
						record.erase({
							success: function () {
								grid.getStore().reload();
							}
						});
					}
				}
			]
		}
	]
});