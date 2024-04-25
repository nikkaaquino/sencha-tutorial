Ext.define('MyApp.view.main.ExtraController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    init:function(){
        console.warn("app")
        this.control({
            '#another':{
                click: 'callOnClick'
            }
        })
    },
    callOnClick: function(){
        alert("hello from controller");
    }
})