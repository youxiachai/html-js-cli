/**
 * Created by youxiachai on 14-1-20.
 */
var request = require('request'),
    cheerio = require('cheerio'),
    debug = require('debug')('parse: article');


function parseItem($item){

    var title = $item.find('.real-title')
    var column =  $item.find('a.column-title')

    var itemObj = {}
    itemObj.title =  title.text();

    console.log('title : ' + title.text())
    console.log('category : ' + column.text())

    var $contentFoot = $item.find('.entry-foot .others')

    var itemArray = [];
    $contentFoot.children().each(function (i){
        itemArray[i] =  cheerio(this).text().trim()
    })
    console.log('author info :'  + itemArray)
    console.log('----------------------------')


}

function parseArticle(html){

    var  $ = cheerio.load(html);
    // 获取content div

    var $content = $('#content .content .articles');

    $content.children().each(function (){
        parseItem(cheerio(this))
    })
}

exports.parseArticle = parseArticle