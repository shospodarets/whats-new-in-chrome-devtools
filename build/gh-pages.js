var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
    path.resolve(),
    {
        basePath: 'css/**/*'
    },
    (err)=> {
        console.log('gw-pages error:', err);
    });