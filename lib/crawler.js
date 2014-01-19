/**
 * Created by youxiachai on 14-1-20.
 */

var request = require('request'),
    zlib = require('zlib'),
    parser = require('./parsehtmljs'),
    debug = require('debug')('crawler: article');

function crawler(url){
    function response(err, res, body){
         if(err){
             return console.log(err)
         }

        debug(res.headers['content-encoding'])
        zlib.unzip(body, function(err, buffer) {
            if (err) {
                return console.log(err)
            }
            parser.parseArticle(buffer.toString())

        });
    }
    debug(url)
    request.get({
        headers : {
            'Accept-Encoding' : 'gzip',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0'
        },
        encoding : null,
        url : url}, response)
}





exports.crawler = crawler