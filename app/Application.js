/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
const DEFAULT_URI = '/cats';

Ext.define('Angular.tryout.Application', {
	extend: 'Ext.app.Application',

	name: 'Angular.tryout',

	stores: [
		// TODO: add global / shared stores here
	],

	defaultToken: DEFAULT_URI,

	listen: {
		controller: {
			'#': {
				unmatchedroute: 'onUnmatchedRoute'
			}
		}
	},

	routes: {
		'/cats': {
			action: 'onCats'
		},
		'/cats/:catId': {
			action: 'onCat'
		},
		'/owners': {
			action: 'onOwners'
		}
	},

	onUnmatchedRoute: function (hash) {
		console.log('Unmatched', hash);
		this.redirectTo(DEFAULT_URI);
	},

	onCats: function () {
		this.getMainView().setActiveTab("cats");
	},

	onCat: function (catId) {
		this.getMainView().setActiveTab("cats");
	},

	onOwners: function () {
		this.getMainView().setActiveTab("owners");
	}
});