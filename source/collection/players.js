const {Collection}=require('backbone')
const _=require('underscore');

const Players=require('../model/player');

const Players=Collection.extend({
    model:Player,
    url:"http://127.0.0.1:8080/players"
})
module.exports=Players;