var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
    __dirname,
    {
        basePath: 'css/**/*'
    },
    (err)=> {
        console.log('gw-pages error:', err);
    });