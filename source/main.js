const {View,Router}=require('backbone')
const Handlebars=require('handlebars');

const $=require('jquery');

const TimelineView=require('./views/TimelineView')
const ProfileView=require('./views/ProfileView')
const SearchView=require('./views/SearchView')
const TwitterRouter=require('./routers/TwitterRouter')
const SearchModel=require('./models/Search')

new TimelineView();
new ProfileView();
const searchModel=new SearchModel();
new SearchView({model:searchModel});
new TwitterRouter({searchModel:searchModel})
Backbone.history.start();