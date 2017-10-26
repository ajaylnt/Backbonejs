const {Model}=require('backbone');

const Profile=Model.extend({
    urlRoot:'http://localhost:9999/profile'
})

module.exports=Profile;