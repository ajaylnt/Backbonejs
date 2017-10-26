const {View}=require('backbone')
const Handlebars=require('handlebars');
const $=require('jquery');

const Profile=require('../models/Profile');

const ProfileView=View.extend({

    el:'#profile-view',
    template:Handlebars.compile($('#profile-template').html()),
    initialize:(options)=>{
        this.model=new Profile();
        this.model.fetch({});
        this.listenTo(this.model,'change',this.render);
        this.render();

    },
    render(){
        let output=this.template({user:this.model.toJSON()})
        this.$el.html(output);
        return this;
    }
})

module.exports=ProfileView;