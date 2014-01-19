#!/usr/bin/env node

var program = require('commander'),
    htmljscli = require('../index'),
    libInfo = require('../package');

program
    .version(libInfo.version)

program
    .command('article')
    .description('show article list')
    .option('-p, --page [page]', 'article list')
    .action(function(options){
        htmljscli.listArticle(options.page)
    });


program.parse(process.argv);