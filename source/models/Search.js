const Backbone,{Model}=require('backbone');

const Search=Model.extend({

    url:'http://localhost:9999/search',
    sync:function(method,model,options){
        if(this.get('query')){
            this.url=this.url+'/'+this.get('query');
        }
        Backbone.sync.call(this,method,options);
        this.url="http://localhost:9999/search";

    }
})
module.exports=Search;