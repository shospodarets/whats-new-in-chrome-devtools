var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
    __dirname,
    '(css|img)',
    (err)=> {
        console.log('gw-pages error:', err);
    });