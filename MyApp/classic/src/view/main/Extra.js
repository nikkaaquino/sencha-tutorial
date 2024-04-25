Ext.define("MyApp.view.main.Extra", {
  extend: "Ext.container.Container",
  xtype: "extra",
  controller: "extra",
  items: [
    {
      title: "Extra View here",
      html: "Dom will be here.",
    },
    {
      xtype: "button",
      name: "click",
      text: "Call Controller",
      itemId: "callController",
    },
    {
      xtype: "button",
      name: "another",
      text: "another button",
      itemId: "another",
    },
  ],
});
