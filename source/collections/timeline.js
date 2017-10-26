const {Collection}=require('backbone');
const Tweet=require('../models/Tweet')

const Timeline=Collection.extend({
    model:Tweet,
    url:"http://localhost:9999/timeline"

})

module.exports=Timeline;