/**
 * This view is an example list of people.
 */
Ext.define('Angular.tryout.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Angular.tryout.store.Cat'
    ],

    store: {
        type: 'cat'
    },

    columns: [
        { text: 'Name',  dataIndex: 'naam' },
        { text: 'Geslacht', dataIndex: 'geslacht', flex: 1 },
        { text: 'Gedrag', dataIndex: 'gedrag', flex: 1 }
    ]
});
