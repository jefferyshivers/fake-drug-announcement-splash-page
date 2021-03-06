var express = require('express');
var app = express();
var path = require('path');

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.get(/^(.+)$/, (req, res) => {
  res.sendFile(req.params[0], { root: `${__dirname}/dist` })
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Express listening in %s mode", app.settings.env);
});