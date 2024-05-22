Ext.define("MyApp.view.main.Extra", {
  extend: "Ext.grid.Panel",
  xtype: "extra",
  title: "Grid Testing",
  store: [
    {
      name: "Nikka Aquino",
      email: "nikkaaquino28@gmail.com",
      phone: "0917176899",
    },
    {
      name: "Matet Manuba",
      email: "matetmanuba@gmail.com",
      phone: "0917176899",
    },
  ],
  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone", dataIndex: "phone", flex: 1 },
  ],
  height: 300,
  width: 400,
});
