/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Angular.tryout.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	requires: [
		'Angular.tryout.view.owners.OwnerForm'
	],

	tabChange: function (tabPanel, newCard) {
		return this.redirectTo('/' + newCard.id);
	},
	afterrender: function (panel) {
		var bar = panel.tabBar;
		bar.insert(bar.items.length, [{
			xtype: 'component',
			flex: 1
		}, {
			xtype: 'button',
			icon: '/resources/images/add.png',
			tooltip: 'Nieuw',
			style: 'background-color:transparent',
			focusCls: '',
			handler: function () {
				if (bar.activeTab.card.id == "owners") {
					var ownerForm = Ext.create({
						xtype: 'ownerForm',
						listeners:{
							'destroy': function(ownerForm, eOpts){
								console.log(ownerForm);
								var ownerStore = panel.getStore("owner");
							}
						}
					});
				}
			}
		}]);
	}
});
