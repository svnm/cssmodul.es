var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var path = require('path');
var request = require("request");
var GitHubApi = require("github");

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/public', express.static(__dirname + '/public'))

/*
get npm modules by keyword - https://registry.npmjs.org/-/_view/byKeyword?startkey=[%22table%22]&endkey=[%22table%22,{}]&group_level=3
get download count for an npm module - https://api.npmjs.org/downloads/point/last-week/react-search
get all info for a repo - http://registry.npmjs.org/react-search
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
		} else {
			console.log("We’ve encountered an error: " + error);
		}

		res.json({ 
  		  modules: JSON.parse(body)
  		})
	});

});


/* get a modules details */
app.get('/api/moduleDetails', function(req, res) {

  var module = req.param('module');
  var registryUrl = 'https://registry.npmjs.org';
  var url = [registryUrl, module].join('/');

  request(url, function (error, response, body) {

    if (!error) {
    } else {
      console.log("We’ve encountered an error: " + error);
    }

    var module = JSON.parse(body);

    // no git repository
    if(module.repository === undefined){
      res.json({ 
        module: module,
        starCount: 0
      })

    } else {
    // git repository, get star count

    // parse the repo Url...
    var gitRepoUrl = module.repository.url
    var start = gitRepoUrl.lastIndexOf('https')
    var end = gitRepoUrl.lastIndexOf('.git')
    module.repoLink = gitRepoUrl.substring(start, end)

    // parse the repo name...
    var gitRepoUrl = module.repository.url 
    var start = gitRepoUrl.lastIndexOf('/')
    var end = gitRepoUrl.lastIndexOf('.git')

    var repository = gitRepoUrl.substring(start + 1, end)

    // parse the git user name...
    var gitUrl = 'https://github.com/'
    var start = gitRepoUrl.lastIndexOf(gitUrl)
    var end = gitRepoUrl.lastIndexOf('/')

    var user = gitRepoUrl.substring(start + gitUrl.length, end)

    getStargazers(user, repository, function (response) {
        var count = 0
        if(response !== undefined){
          count = response.length
        }       
        res.json({ 
          module: module,
          starCount: count
        })
      })
    }
  });
});


/* get a github repository details */
app.get('/api/gitRepoDetails', function(req, res) {

  //var repo = req.param('repo'); 
  getStargazers('StevenIseki', 'react-search', function (response) {
    res.json({ 
      stargazers: response
    })
  })
});

function getStargazers (user, repository, cb) {

  var github = new GitHubApi({ version: "3.0.0" });

  github.repos.getStargazers({
      user: user,
      repo: repository 
  }, function(err, response) {
    cb(response);    
  });
}


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
