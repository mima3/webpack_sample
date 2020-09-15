const config = {}; //require('./webpack.config.js');
const webpack = require('webpack');

webpack(config, (err, stats) => {
  console.error(err);
  console.error(stats);
});
