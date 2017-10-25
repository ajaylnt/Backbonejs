var {Model,View,Collection,Router}=require('backbone')
var _=require('underscore');

var Order=Model.extend({
    defaults:{
        'id':0,
        'name':''
    },
validate:function(atts){
var validNames=['Order1','Order2','Order3'];
var nameIsValid=function(attrs){
  if(!attrs.name) return true;
  return _(validNames).include(attrs.name);  
}
if(!nameisValid(attrs)){
return "name must be one of"+validName.join(",");
}
},

place:function(){
    console.log(JSON.stringify(this.toJSON()))
}
})