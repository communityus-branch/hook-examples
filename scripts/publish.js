var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../'), function(err) {
  console.log("Success!")
});
