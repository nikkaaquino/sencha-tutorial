//1. First Parameter Namespace and File Name
//2. Second Parameter is the object

Ext.define('MyApp.view.Viewport', {
  extend: 'Ext.container.Viewport',
  id: 'viewport',
  items: [
    {
      region: 'north',
      html: '<h1>Header Part</h1>',
    },
    {
      region: 'center',
      xtype: 'tabpanel',
      activeTab: 0,
      itemId: 'viewport-target',
    },
    {
      region: 'south',
      html: '<h1>Footer Part</h1>',
    },
  ]
});
