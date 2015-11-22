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

app.use('/public', express.static(__dirname + '/public'))

/*
get npm modules by keyword
https://registry.npmjs.org/-/_view/byKeyword?startkey=[%22table%22]&endkey=[%22table%22,{}]&group_level=3

get download count for an npm module
https://api.npmjs.org/downloads/point/last-week/react-search

get all info for a repo
http://registry.npmjs.org/react-search

get stargazer count...
github

the only real info on searching npm api...
http://stackoverflow.com/questions/13657140/how-to-get-all-npm-packages-that-match-a-particular-keyword-in-json-format

*/


/* get all modules by keyword */
app.get('/api/modules', function(req, res) {

  var keyword = req.param('keyword');

	var registryUrl = 'https://registry.npmjs.org',
      dlCountUrl    = 'https://api.npmjs.org/downloads/point/last-week';
      viewsPath     = '-/_view',
      keywordView   = 'byKeyword';

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
  		  modules: JSON.parse(body)
  		})
	});

});


/* get all module details */
app.get('/api/moduleDetails', function(req, res) {

  var module = req.param('module');
  var registryUrl = 'https://registry.npmjs.org';
  var url = [registryUrl, module].join('/');

  request(url, function (error, response, body) {

    if (!error) {
      console.log(body);
    } else {
      console.log("We’ve encountered an error: " + error);
    }

    res.json({ 
        module: JSON.parse(body)
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
