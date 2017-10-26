const {View,Router}=require('backbone')
const Handlebars=require('handlebars');
const $=require('jquery');
const ResultsView=require('../views/ResultsView')
TwitterRouter=Router.extend({
searchModel:null,
initialize:(options)=>{

    this.searchModel=options.searchModel;
    this.listenTo(this.searchModel,'change:query',this.navigateToSearch)


},
navigateToSearch(model,options){
    //manually navigate to search
    this.navigate("search/"+model.get('query'),{trigger:true})

},
routes:{

    'search/:query':(query)=>{
        if(this.searchModel.get('query')!==query){
            this.searchModel.set('query',query,{silent:true})
        }
        //Now Let Us Go To The View
        this.searchModel.fetch({
            success:(model)=>{
                let resultsView=new ResultsView({model:model})


            },
            
        })

    }
}


})


