var {Model}=require('backbone')
var _=require('underscore');

//Ajax Calling in case of Backbone
const Player=Model.extend({
    urlRoot:"http://127.0.0.1:8080/players",
    initialize(){
        this.on('invalid',(model,error)=>{
            console.log(error);
        })
    },
    defaults:{
        id:0,
        name:'',
        type:''
    }
})

module.exports=Player;