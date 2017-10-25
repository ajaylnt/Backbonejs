const $=require('jquery');
const _=require('underscore');
const {View}=require('backbone');
const Order=require('../model/order');
const OrderView=new  View.extend({

tagName:'div',
className:'model-object',
render:function(){

    $(this.el).append('<h2>'+this.model.get('name')+'</h2>');
    this.$el.html('<input type="text" class="clickable" placeholder="clickable">');
    return this;
},
events:{
    'click.clickable':'handleClick',
    'change':'handleChange'
},

handleClick:function(){
    alert('clicked')
},
handleChange:function(){
    alert('changed')
}

})
let order=new Order({'id':1,'name':'Order1'});

order.set('name','New Value')
order.on('change',function(){
$('body').append(new OrderView({model:order}).render().el);
})
module.exports=OrderView;
let counter=0;
setInterval(function(){
counter++;
order.set('name','New Value2'+counter)
},1000);