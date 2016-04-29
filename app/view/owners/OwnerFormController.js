Ext.define('Angular.tryout.view.owners.OwnerFormController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.ownerForm',

	requires: [],

	onCancel: function () {
		this.getView().destroy();
	},
	onRegister: function (event) {
		var view = this.getView();
		var form = view.items.getAt(0).getForm();
		form.submit({
			url: Angular.tryout.model.Owner.proxy.url,
			success: function (form, action) {
				view.destroy();
				console.log("success", action);
			},
			failure: function (form, action) {
				console.log("Failed", action);
			}
		});
	}
});
