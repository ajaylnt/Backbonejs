
module.exports = {
  entry: {
    app: "./source/main.js"
  },
  output: {
    filename: "./build/[name].build.js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  node:{
    fs:'empty'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};