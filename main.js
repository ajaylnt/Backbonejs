const $=require('jquery');
const _=require('underscore');
require('backbone');
require('handlebars')

const PlayerRouter=require('./routers/PlayerRouter')

// const Players=require('./collection/players');
// const PlayersView=require('./view/playerview');

// const players=new Players();

// // AJAX GET Request

// players.fetch({success:()=>{
//     let playerView=new PlayersView({collection:players});
// }})

const router=new PlayerRouter();
router.on("route:home",(page)=>{
    alert('welcome to our application')
})

Backbone.history.start();