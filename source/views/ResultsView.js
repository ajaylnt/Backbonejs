const {View}=require('backbone')
const Handlebars=require('handlebars');
const $=require('jquery');

const Profile=require('../models/Profile');

const ResultsView=View.extend({

    el:'#timeline',
    template:Handlebars.compile($('#timeline-template').html()),
    initialize:(options)=>{
        this.model=options.model;
        this.model.fetch({});
        this.listenTo(this.model,'change',this.render);
        this.render();

    },
    render(){
        let output=this.template({tweet:this.model.get('statuses')})
        this.$el.html(output);
        return this;
    }
})

module.exports=ResultsView;