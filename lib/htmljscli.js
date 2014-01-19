/**
 * Created by youxiachai on 14-1-20.
 */
var cli = require('./crawler');
//
//http://www.html-js.com/article?page=2


var htmlArticle = 'http://www.html-js.com/article';

function listArticle (page){
    if(page){
        htmlArticle += '?page=' + page;
    }
    cli.crawler(htmlArticle)
}

exports.listArticle = listArticle;
