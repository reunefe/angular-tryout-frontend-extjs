Ext.define('Angular.tryout.view.cats.CatList', {
    extend: 'Ext.grid.Panel',
    xtype: 'catlist',

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
