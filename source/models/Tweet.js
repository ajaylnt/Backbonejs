const {Model}=require('backbone');
const Tweet=Model.extend({

    parse(model){
        let friendly=moment(model.created_at,"ddd MMM DD HH:mm:ss zz YYYY").fromNow();

        model.friendlyDate=friendly;
        return model;
    }
})

module.exports=Tweet;