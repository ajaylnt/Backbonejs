var $=require('jquery');
var _=require('underscore');
require('backbone');

var Order=require('./model/order');
const OrderView=require('./View/orderview');

// var order=new Order({id:1,name:'Order1'})
// order.on('customevent',function(){
//     console.log('Custom Event')
// });

// order.trigger('customevent');

// order.on('change',function(e){
// console.log(e instanceof Order)
// e.set('name','Name2')

// console.log('Order Changed'+e);
// });

// order.on('invalid',function(model,error){
//     console.log(model+""+error)
// });
// //var attrs=order.toJSON();

// //console.log(JSON.stringify(attrs));
// order.place();

// order.set('name','Order3',{validate:true})
// order.set('id',2)

// //console.log(order.get('id'))
