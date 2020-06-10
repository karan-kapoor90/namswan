var fs = require('fs')
const utf8 = require('utf8')

var regex = new RegExp(/w*.jpg\b/,'i');
fs.readFile('./_posts/Bakery/2020-02-21-macaron.md', 'utf8', (err, data) => {
    console.log(utf8.decode(data.search(regex)));
});
