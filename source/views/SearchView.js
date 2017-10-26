const {View}=require('backbone')
const Handlebars=require('handlebars');
const $=require('jquery');

const SearchView=View.extend({

    el:'#search',
    events:{
        'click #searchbutton':(e)=>{
            let query=$('#searchbox').val();
            e.preventDefault();

            //<---a trick will force a reset of the attribute if the
            //value of the search term was same as the previous one--->
            this.model.set('query','',{silent:true})
            this.model.set('query',query);

        }
    },
    initialize:(options)=>{
        this.model=options.model;

        // this.model.fetch({});
        // this.listenTo(this.model,'change',this.render);
        // this.render();
    }
})

module.exports=SearchView;