var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var path = require('path');
var request = require("request");
var	cheerio = require("cheerio");

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/api/books', function(req, res) {

	console.log('ey');

  var keyword = req.param('keyword');

	var registryUrl = 'https://registry.npmjs.org',
      dlCountUrl    = 'https://api.npmjs.org/downloads/point/last-week';
      viewsPath     = '-/_view',
      keywordView   = 'byKeyword',
      dlCountUrl    = 'https://api.npmjs.org/downloads/point/last-week';

  var query         = 'startkey=["' + keyword + '"]' 
      query        += '&endkey=["' + keyword + '",{}]'
      query        += '&group_level=3'

  var url = [registryUrl, viewsPath, keywordView].join('/') + '?' + query

	request(url, function (error, response, body) {

		if (!error) {
			console.log(body);
		} else {
			console.log("We’ve encountered an error: " + error);
		}

		res.json({ 
  		  components: JSON.parse(body)
  		})
	});

});


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
