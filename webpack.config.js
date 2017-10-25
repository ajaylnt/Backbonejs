
module.exports = {
  entry: {
    app: "./source/app.js"
  },
  output: {
    filename: "./build/[name].build.js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};