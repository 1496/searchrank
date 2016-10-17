var express = require('express');
var router = express.Router();
var client = require('cheerio-httpcli');

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	console.log('ok');
//   res.send('respond with a resource');
// });


router.post('/', function(req, res) {
	var json = req.body;
	var _res = res

	/*--------------------------------------------
	1 Gooogleにリクエストを投げる*/
	var searchCount = 0;
	var maxCount = 50;
	var findFlag = false;
	var ranking = NaN;

	console.log('URL : ' + json.serchURL);
    console.log('検索ワード : ' + json.keywords);
    

    client.fetch('https://www.google.com/search', {q:json.keywords , start:searchCount, num:100},function(err, $, res){
		
		if(err){console.log('エラーA'); return;};
		$('h3.r a').each(function (idx) {
			if(json.serchURL === $(this).attr('href'))
			{
				ranking = idx + 1;
				console.log('現在', ranking ,'位です');
				findFlag = true;

				_res.render('index', { data:ranking});
			}

		});
		
    });


});

module.exports = router;
