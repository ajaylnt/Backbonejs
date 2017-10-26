const {View}=require('backbone')
const Handlebars=require('handlebars');
const $=require('jquery');
const Timeline=require('../collections/timeline')



const TimelineView=View.extend({

    el:'#timeline',
    template:Handlebars.compile($('#timeline-template').html()),
    initialize:(options)=>{
        this.timeline=new Timeline();
        this.render();
        this.timeline.fetch({reset:true});
        this.listenTo(this.timeline,'reset',this.render);

    },
    render(){
        let output;
        if(this.timeline.models.length>0){
            output=this.template({tweet:this.timeline.toJSON()})
        this.$el.html(output);
        }
        return this;
    }
})

module.exports=TimelineView;