var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
    __dirname,
    {
        basePath: '(css|img)'
    },
    (err)=> {
        console.log('gw-pages error:', err);
    });